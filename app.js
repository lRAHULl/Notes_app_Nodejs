console.log("Starting App.JS");

const fs = require("fs"); // File System Module.
const os = require("os"); // Operating System.
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
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
  notes.getAll();
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

  var message = removeNote
    ? "Note Removed Successfully!"
    : "The Note you specified does not exist."; // ternary operator.
  console.log(message);

  //   if (removeNote) {
  //     console.log("Note Removed Successfully!");
  //   } else {
  //     console.log("The Note you specified does not exist.");
  //   }
} else {
  console.log("Command not Recognized.");
}

// var user = os.userInfo();
// console.log(user)

// var res = notes.addNote();
// console.log(res)

// console.log(`The Sum is ${notes.add(10, -25)}.`)

// fs.appendFile('test.txt', `Hello ${user.username}!`, (err) => {
//     if (err) {
//         console.log('Some Problem ' + err);
//     }
// });
