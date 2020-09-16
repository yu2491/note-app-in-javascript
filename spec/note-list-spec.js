(function() {

  test.that('it can create and store a new single note model', function() {
    var noteList = new NoteList();
    noteList.createNote('Test Note');
    note = noteList.notes[0]
    expect.toEqual(note.getNote(), 'Test Note');
    expect.toEqual(note instanceof Note, true);
  });

  test.that('method that will return all the note models stored', function() {
    var noteList = new NoteList();
    noteList.createNote('Test Note 1');
    noteList.createNote('Test Note 2');
    expect.toEqual(noteList.getNotes() instanceof Array, true)
    expect.toEqual(noteList.getNotes().length, 2)
    expect.toEqual(noteList.getNotes()[0].getNote(), 'Test Note 1')
    expect.toEqual(noteList.getNotes()[0].getNote(), 'Test Note 2')

  });

})(this);
