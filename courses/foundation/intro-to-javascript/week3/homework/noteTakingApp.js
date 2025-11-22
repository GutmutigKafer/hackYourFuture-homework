const notes = [];

const saveNote = (content, id) => {
  const note = {
    content,
    id,
  };
  notes.push(note);
  return `${Object.values(note).join(" #")} added to Notes.`;
};

const getNote = (id) => {
  if (!id || typeof id !== "number") return "Enter correct id";
  for (let note of notes) {
    if (note.id === id) {
      return `Note #${Object.values(note)[1]}: \n"${Object.values(note)[0]}"\n`;
    }
  }
  return `Error. Note with id ${id} doesn't exist.\n`;
};

const logOutNotesFormatted = (notes) =>
  notes
    .map(
      (note) =>
        `The note with id: ${note.id}, has the following note text: "${note.content}"`
    )
    .join("\n") + `\n`;

const changeNote = (id, newContent, notes) => {
  if (!id || typeof id !== "number") return "Enter correct id";
  for (let note of notes) {
    if (note.id === id) {
      note.content = newContent;
      return `Note #${Object.values(note)[1]} content was changed to: \n"${
        Object.values(note)[0]
      }"\n`;
    }
  }
  return `Error. Note with id ${id} doesn't exist.`;
};

const deleteNote = (id, notes) => {
  if (!id || typeof id !== "number") return "Enter correct id";
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    if (note.id === id) {
      notes.splice(i, 1);
      updateNoteIds(notes);
      return `Note: "${Object.values(note)[0]}" was deleted from Notes\n`;
    }
  }
  return `Error. Note with id ${id} doesn't exist.`;
};
const updateNoteIds = (notes) => {
  for (let [id, note] of notes.entries()) {
    note.id = id + 1;
  }
};
