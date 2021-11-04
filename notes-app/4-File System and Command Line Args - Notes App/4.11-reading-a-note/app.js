const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your note!',
  handler() {
    // console.log('Listing out all notes');
    notes.listNotes();
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note!',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    // console.log('Reading a note');
    notes.readNote(argv.title);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note!',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    // console.log('Removing the note!');
    notes.removeNote(argv.title);
  }
})

yargs.parse();

// console.log(yargs.argv);