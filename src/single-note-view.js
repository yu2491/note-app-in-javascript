class SingleNoteView {
  constructor(noteModel) {
    this.noteModel = noteModel
  }

  html() {
    return `<div>${this.noteModel.getNote()}</div>`
  }

  url() {
    return `notes/${this.noteModel.id}`
  }
}
