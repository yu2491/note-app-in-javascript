var noteListController = new NoteController(new NoteList);

window.onload = function() {

  makeUrlChanges();
  noteListController.showNoteList();
  noteListController.submittingNote();

  function makeUrlChanges() {
    window.addEventListener("hashchange", showCorrectContent);
  };

  function showCorrectContent() {
    showNote(getNoteTextFromUrl(window.location));
  };

  function getNoteTextFromUrl(location) {
    return location.hash.split("#note-")[1];
  };

  function showNote(id) {
    var noteList = noteListController.noteList.getNotes()
    for(var i=0; i<noteList.length; i++) {
      if(noteList[i].id == id) {
        document.getElementById("single-note").innerHTML = new SingleNoteView(noteList[i]).html();
      }
    }
  }

}
