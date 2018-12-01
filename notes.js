const fs = require("fs");

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (err) {
    return [];
  }
};

var saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}; // If function does not return anything, it returns undefined.

var getAll = () => {
  return fetchNotes();
};

var findNote = title => {
  var notes = fetchNotes();
  var filteredNote = notes.filter(note => note.title === title); // Returns an array.
  return filteredNote[0];
};

var removeNote = title => {
  var notes = fetchNotes();
  var startLength = notes.length;
  var noteToBeRemoved = notes.filter(note => note.title === title);
  notes.pop(noteToBeRemoved);
  var endLength = notes.length;
  saveNotes(notes);
  return startLength !== endLength;
};

var logNote = note => {
  debugger;
  console.log("---------Note-----------");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote, // Actual Syntax:- addNote: addNote
  getAll,
  findNote,
  removeNote,
  logNote
};

// module.exports.add = (a, b) => {
//     return a + b;
// };