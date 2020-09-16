'use strict'

class NoteListView {

  constructor(noteList) {
    this.noteList = noteList
  }

  getHTML() {
    var htmlStart = "<ul><li>"
    var notes = this.noteList.getNotes().map(note => { return note.getNote().slice(0,20) })
    var htmlString = htmlStart + notes.join('</li><li>')
    return htmlString + "</li></ul>"
  }

}
