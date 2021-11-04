const chalk = require('chalk');
const fs = require("fs");

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    // debugger;
    if (!duplicateNote) { // duplicateNote === undefined
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const keep = notes.filter((note) => note.title !== title);

    if (notes.length > keep.length) {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(keep);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.magenta.inverse('Your notes...'));
    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const founded = notes.find((note) => note.title === title);

    if (founded) {
        console.log(chalk.magenta.inverse(founded.title));
        console.log(founded.body);
    } else {
        console.log(chalk.red.inverse("Note not found!"));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};