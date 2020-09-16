'use strict'

class NoteList {

  constructor() {
    this.notes = []
  }

  createNote(text) {
    this.notes.push(new Note(text))
  }

}
