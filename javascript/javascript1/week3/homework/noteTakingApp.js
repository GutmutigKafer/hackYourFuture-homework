//* NOnoN0nOYes (Note taking app)

//Save a note

const notes = [];

function saveNote(content, id) {
  let note = {
    content,
    id,
  };
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Wash the car", 3);
saveNote("Fix the TV", 4);

console.log(notes);

//Get a note
function getNote(id) {
  for (let note of notes) {
    if (note.id === id) {
      return note;
    }
  }
  return `Error. Note with id ${id} doesn't exist.`;
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
console.log(getNote(4));

//Log out notes
function logOutNotesFormatted() {
  for (let note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`
    );
  }
  console.log(`\n`);
}

logOutNotesFormatted(); // should log out the text below

// Change a note
function changeNote(id, newContent) {
  for (let note of notes) {
    if (note.id === id) {
      note.content = newContent;
      return note;
    }
  }
  return `Error. Note with id ${id} doesn't exist.`;
}

changeNote(3, "Clean the car");

logOutNotesFormatted();

//Delete a note
function deleteNote(id) {
  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    if (note.id === id) {
      notes.splice(i, 1);
      updateNoteIds();
    }
    }
  return `Error. Note with id ${id} doesn't exist.`;

}
function updateNoteIds() {
    for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    note.id = i + 1;
    }
  }

deleteNote(2);

logOutNotesFormatted();


console.log(getNote(3));