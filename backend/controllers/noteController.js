import Note from "../models/noteModel.js";

// @desc    Get all notes of a user
// @route   GET /api/notes
// @access  Private
const getNotes = async (req, res) => {
    const notes = await Note.find({ user: req.user._id });
    res.json(notes);
};

// @desc    Create new note
// @route   POST /api/notes
// @access  Private
const createNote = async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    const note = new Note({
        user: req.user._id,
        title,
        content,
    });

    const createdNote = await note.save();
    res.status(201).json(createdNote);
};

// @desc    Update note
// @route   PUT /api/notes/:id
// @access  Private
const updateNote = async (req, res) => {
    const { title, content } = req.body;

    const note = await Note.findById(req.params.id);

    if (note.user.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: "Not authorized" });
    }

    if (note) {
        note.title = title || note.title;
        note.content = content || note.content;

        const updatedNote = await note.save();
        res.json(updatedNote);
    } else {
        res.status(404).json({ message: "Note not found" });
    }
};

// @desc    Delete note
// @route   DELETE /api/notes/:id
// @access  Private
const deleteNote = async (req, res) => {
    const note = await Note.findById(req.params.id);

    if (note.user.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: "Not authorized" });
    }

    if (note) {
        await note.deleteOne();
        res.json({ message: "Note removed" });
    } else {
        res.status(404).json({ message: "Note not found" });
    }
};

export { getNotes, createNote, updateNote, deleteNote };
