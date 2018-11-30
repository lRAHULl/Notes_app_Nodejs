console.log('Starting Notes.JS');

// module.exports.age = 19

var addNote = (title, body) => {
    console.log('Adding Note: ', title, body);
};

var getAll = () => {
    console.log('Getting All Notes.')
};

var findNote = (title) => {
    console.log('Found the note with title:', title);
}

var removeNote = (title) => {
    console.log('Removed the note with title:', title)
}

module.exports = {
    addNote, // Actual Syntax:- addNote: addNote
    getAll,
    findNote,
    removeNote
}

// module.exports.add = (a, b) => {
//     return a + b;
// };