(function() {

  test.that('getNote returns the note text', function() {
    var note = new Note('Hello World!');
    expect.toEqual(note.getNote(), 'Hello World!');
  });

})(this);
