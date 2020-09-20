'use strict'

class NoteListView {

  constructor(noteList) {
    this.noteList = noteList
  }

  getHTML() {
    var htmlStart = "<ul>"
    var htmlEnd = "</ul>"
    var notes = this.noteList.getNotes().map(note => {
      return `<li><a id="note-${note.id}" href="#note-${note.id}">${note.getNote().slice(0,20)}</a></li>`})
    var htmlString = notes.join('')
    return `${htmlStart}${htmlString}${htmlEnd}`
  }

}
