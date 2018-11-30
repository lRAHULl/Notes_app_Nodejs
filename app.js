console.log('Starting Notes app...')

const fs = require('fs'); // File System Module.
const os = require('os'); // Operating System.

var user = os.userInfo()
// console.log(user)

fs.appendFile('test.txt', `Hello ${user.username}!`, (err) => {
    if (err) {
        console.log('Some Problem ' + err);
    }
});

