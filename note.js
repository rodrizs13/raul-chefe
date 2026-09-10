"use client";

import { useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

export default function NotesApp() {
    const [notes, setNotes] = useState([]);

    function addNote(title, content) {
        const newNote = {
            id: Date.now().toString(),
            title,
            content,
            createdAt: new Date().toLocaleString("pt-BR"),
        };

        setNotes((currentNotes) => [newNote, ...currentNotes]);
    }

    function deleteNote(id) {
        setNotes((currentNotes) =>
            currentNotes.filter((note) => note.id !== id)
        );
    }

    return (
        <main style={styles.container}>
            <h1>Minhas Anotações</h1>

            <NoteForm onAddNote={addNote} />

            <NoteList notes={notes} onDelete={deleteNote} />
        </main>
    );
}

const styles = {
    container: {
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
    },
};

