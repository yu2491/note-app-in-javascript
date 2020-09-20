(function() {

  test.that('getNote returns the note text', function() {
    var note = new Note(0, 'Hello World!');
    expect.toEqual(note.getNote(), 'Hello World!');
  });

})(this);
