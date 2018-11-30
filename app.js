console.log('Starting App.JS');

const fs = require('fs'); // File System Module.
const os = require('os'); // Operating System.
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0]; // Used to get command line arguments.
console.log(`Command: ${command}`);
// console.log('Yargs:', argv)

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.findNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not Recognized.');
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

