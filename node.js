"use client";

import {
  useState
}

from "react";

export default function NoteForm({
  onAddNote

}) {
  const [title,
  setTitle]=useState("");
  const [content,
  setContent]=useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if ( !title.trim() || !content.trim()) {
      alert("Preencha o título e o conteúdo.");
      return;
    }

    onAddNote(title, content);

    setTitle("");
    setContent("");
  }

  return (<form onSubmit= {
      handleSubmit
    }

    style= {
      styles.form
    }

    > <input type="text"
    placeholder="Título da anotação"

    value= {
      title
    }

    onChange= {
      (event)=> setTitle(event.target.value)
    }

    style= {
      styles.input
    }

    /> <textarea placeholder="Digite sua anotação..."
    value= {
      content
    }

    onChange= {
      (event)=> setContent(event.target.value)
    }

    rows= {
      5
    }

    style= {
      styles.textarea
    }

    /> <button type="submit" style= {
      styles.button
    }

    > Criar anotação </button> </form>);
}

const styles= {
  form: {
    display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginBottom: "30px",
  }

  ,

  input: {
    padding: "12px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "6px",
  }

  ,

  textarea: {
    padding: "12px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      resize: "vertical",
  }

  ,

  button: {
    padding: "12px 20px",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
  }

  ,
}

;
