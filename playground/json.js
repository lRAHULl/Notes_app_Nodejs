// var obj = {
//     name: 'Rahul'
// };
// var stringobj = JSON.stringify(obj);

// console.log(typeof (stringobj))
// console.log(stringobj)

// var personStr = '{"name": "Rahul", "age": 19}'
// person = JSON.parse(personStr);
// console.log(typeof (person))
// console.log(person)

const fs = require('fs');
var originalNote = {
    title: 'Secrets',
    body: 'Some Secrets'
}

var originalNoteStr = JSON.stringify(originalNote);
fs.writeFileSync('Notes.json', originalNoteStr);

var noteString = fs.readFileSync('Notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note);
console.log(note.title);