import React, { useState, useEffect } from "react";
import API from "../api/axiosConfig";
import NoteCard from "../components/NoteCard";

const MyNotes = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const fetchNotes = async () => {
        const { data } = await API.get("/notes");
        setNotes(data);
    };

    const handleAddNote = async (e) => {
        e.preventDefault();
        await API.post("/notes", { title, content });
        setTitle("");
        setContent("");
        fetchNotes();
    };

    const handleDelete = async (id) => {
        await API.delete(`/notes/${id}`);
        fetchNotes();
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    // Edit state
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editContent, setEditContent] = useState("");

    const handleEdit = (note) => {
        setEditId(note._id);
        setEditTitle(note.title);
        setEditContent(note.content);
    };

    const handleUpdateNote = async (e) => {
        e.preventDefault();
        await API.put(`/notes/${editId}`, { title: editTitle, content: editContent });
        setEditId(null);
        setEditTitle("");
        setEditContent("");
        fetchNotes();
    };

    return (
        <div className="notes-page">
            <h2>My Notes</h2>
            {editId ? (
                <form onSubmit={handleUpdateNote} className="note-form">
                    <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} placeholder="Title" required />
                    <textarea value={editContent} onChange={(e) => setEditContent(e.target.value)} placeholder="Content" required />
                    <button type="submit">Update Note</button>
                    <button type="button" onClick={() => setEditId(null)} style={{ background: "#eee", color: "#222" }}>Cancel</button>
                </form>
            ) : (
                <form onSubmit={handleAddNote} className="note-form">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
                    <button type="submit">Add Note</button>
                </form>
            )}

            <div className="notes-grid">
                {notes.map((n) => (
                    <NoteCard
                        key={n._id}
                        note={n}
                        onDelete={() => handleDelete(n._id)}
                        onEdit={() => handleEdit(n)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyNotes;
