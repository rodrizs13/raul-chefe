function handleSubmit(event) {
  event.preventDefault();

  if (!title.trim() || !content.trim()) {
    alert("Preencha o título e o conteúdo.");
    return;
  }

  onAddNote(title, content);

  setTitle("");
  setContent("");
}
