'use strict'

class NoteController {

  constructor(noteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView(this.noteList);
  }

  updateHTML() {
     return this.noteListView.getHTML();
  }

  showNoteList() {
    document.getElementById("note-list").innerHTML = this.updateHTML();
  };

  submittingNote() {
    document.getElementById("text").addEventListener("click", function(event) {
      event.preventDefault();
      var note = document.getElementById("text-area").value
      noteListController.noteList.createNote(note)
      noteListController.showNoteList();
      this.reset();
    });

  }

}
