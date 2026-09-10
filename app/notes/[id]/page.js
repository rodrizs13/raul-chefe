"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useNotes } from "../../../components/NotesContext";

export default function NoteDetails() {
  const params = useParams();
  const { notes } = useNotes();

  const note = notes.find((item) => item.id === params.id);

  if (!note) {
    return (
      <main style={styles.container}>
        <h1>Anotação não encontrada</h1>

        <Link href="/">
          <button style={styles.button}>Voltar</button>
        </Link>
      </main>
    );
  }

  return (
    <main style={styles.container}>
      <Link href="/">
        <button style={styles.button}> Voltar</button>
      </Link>

      <h1>{note.title}</h1>

      <p>{note.content}</p>

      <small>Criada em: {note.createdAt}</small>
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

  button: {
    padding: "10px 15px",
    marginBottom: "20px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
