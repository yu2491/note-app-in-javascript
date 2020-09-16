(function() {

    test.that('controller is instantiated with note list', function() {
      var noteController = new NoteController(new NoteList());
      expect.toEqual(noteController.noteList instanceof NoteList, true);
    });

    test.that('controller can get HTML string', function() {
      var noteController = new NoteController(new NoteList());
      expect.toEqual(noteController.updateHTML(), '<ul><li>Favourite drink: seltzer</li></ul>')
    });

})(this);
