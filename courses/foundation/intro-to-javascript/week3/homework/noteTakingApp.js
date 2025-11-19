const notes = [];

const saveNote = (content, id) => {
  const note = {
    content,
    id,
  };
  notes.push(note);
  return `${Object.values(note).join(" #")} added to Notes.`;
};

console.log(saveNote("Pick up groceries", 1));
console.log(saveNote("Do laundry", 2));
console.log(saveNote("Wash the car", 3));
console.log(saveNote("Fix the TV", 4));

console.log(notes);

const getNote = (id) => {
  if (!id || typeof id !== "number") return "Enter correct id";
  for (let note of notes) {
    if (note.id === id) {
      return `Note #${Object.values(note)[1]}: \n"${Object.values(note)[0]}"\n`;
    }
  }
  return `Error. Note with id ${id} doesn't exist.\n`;
};

console.log(getNote(1));
console.log(getNote(5));

const logOutNotesFormatted = (notes) =>
  notes
    .map(
      (note) =>
        `The note with id: ${note.id}, has the following note text: "${note.content}"`
    )
    .join("\n") + `\n`;

console.log(logOutNotesFormatted(notes));

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

console.log(changeNote(3, "Clean the car", notes));

console.log(logOutNotesFormatted(notes));

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

console.log(deleteNote(2, notes));

console.log(logOutNotesFormatted(notes));

console.log(getNote(3));
