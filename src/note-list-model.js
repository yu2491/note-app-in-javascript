'use strict'

class NoteList {

  constructor() {
    this.notes = [];
    this.id = 0;
  }

  createNote(text) {
    this.notes.push(new Note(this.id, text));
    this.id++
  }

  getNotes() {
    return this.notes;
  }

}
