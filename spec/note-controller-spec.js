(function() {

    test.that('controller is instantiated with note list', function() {
      var noteController = new NoteController(new NoteList);
      expect.toEqual(noteController.noteList instanceof NoteList, true);
    });

    test.that('controller can get HTML string and display it on page', function() {
      // Mock the page
      let app = document.createElement('div');
      app.setAttribute('id', 'app');
      document.body.appendChild(app);
      // Run the test
      var noteList = new NoteList()
      noteList.createNote('Test text')
      var noteController = new NoteController(noteList);
      noteController.showNoteList();
      expect.toEqual(app.innerHTML,'<ul><li><a id="note-0" href="#note-0">Test text</a></li></ul>')
    });

})(this);
