const fs = require("fs"); // File System Module.
const os = require("os"); // Operating System.
const yargs = require("yargs");

const notes = require("./notes.js");

var titleOptions = {
  describe: 'Title of the Note',
  demand: true,
  alias: 't'
}

var bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'Adds a New Note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all Notes')
  .command('read', 'Reads a note', {
    title: titleOptions
  })
  .command('remove', 'Removes a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0]; // Used to get command line arguments.
console.log(`Command: ${command}`);
// console.log('Yargs:', argv)

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note === undefined) {
    // Undefined is inheritly False.
    console.log("Note with this title already taken. Please try another one.");
  } else {
    console.log("Note Added Successfully!");
    notes.logNote(note);
  }
} else if (command === "list") {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} Notes.`)
  allNotes.forEach(note => notes.logNote(note));
} else if (command === "read") {
  var note = notes.findNote(argv.title);
  if (note) {
    console.log("Note Found");
    notes.logNote(note);
  } else {
    console.log("Note Not Found!");
  }
} else if (command === "remove") {
  var removeNote = notes.removeNote(argv.title);

  var message = removeNote ?
    "Note Removed Successfully!" :
    "The Note you specified does not exist."; // ternary operator.
  console.log(message);
} else {
  console.log("Command not Recognized.");
}