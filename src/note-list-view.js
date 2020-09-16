'use strict'

class NoteListView {

  constructor(noteList) {
    this.noteList = noteList
  }

  getHTML() {
    var htmlStart = "<ul><li>"
    var notes = this.noteList.getNotes().map(note => { return note.getNote() })
    var htmlString = htmlStart + notes.join('</li><li>')
    return htmlString + "</li></ul>"
  }

}
