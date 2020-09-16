'use strict'

class NoteController {

  constructor(noteList) {
    this.noteList = noteList;
    this.noteList.createNote(["Favourite drink: seltzer"]);
    this.noteListView = new NoteListView(this.noteList);
  }

  updateHTML() {
     return this.noteListView.getHTML();

  }
}

var noteListController = new NoteController(new NoteList())
document.getElementById("app").innerHTML = noteListController.updateHTML();
