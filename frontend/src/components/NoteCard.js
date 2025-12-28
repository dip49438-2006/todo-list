import React from "react";

const NoteCard = ({ note, onDelete, onEdit }) => {
    return (
        <div className="note-card">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                <button onClick={onEdit}>Edit</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default NoteCard;
