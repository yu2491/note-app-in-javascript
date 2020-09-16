class SingleNoteView {
  constructor(noteModel) {
    this.noteModel = noteModel.getNote()
  }

  html() {
    return `<div>${this.noteModel}</div>`
  }
}