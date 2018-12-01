const fs = require("fs");

console.log("Starting Notes.JS");

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };
  try {
    var notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (err) {}

  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log("Getting All Notes.");
};

var findNote = title => {
  console.log("Found the note with title:", title);
};

var removeNote = title => {
  console.log("Removed the note with title:", title);
};

module.exports = {
  addNote, // Actual Syntax:- addNote: addNote
  getAll,
  findNote,
  removeNote
};

// module.exports.add = (a, b) => {
//     return a + b;
// };
