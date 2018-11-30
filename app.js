console.log('Starting App.JS');

const fs = require('fs'); // File System Module.
const os = require('os'); // Operating System.
const notes = require('./notes.js');

var user = os.userInfo();
// console.log(user)

var res = notes.addNote();
console.log(res)

var add = notes.add(2, -2);
console.log(`The Sum is ${add}.`)

fs.appendFile('test.txt', `Hello ${user.username}!`, (err) => {
    if (err) {
        console.log('Some Problem ' + err);
    }
});

