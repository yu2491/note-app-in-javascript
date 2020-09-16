(function() {

  test.that('it can create and store a new single note model', function() {
    var noteList = new NoteList();
    var expectedString = 'testing note creation'
    noteList.createNote(expectedString);
    expect.toEqual(noteList.getNotes()[0] instanceof Note, true);
    var listOfNotesAsText = noteList.getNotes().map(note => { return note.getNote() })
    expect.toEqual(listOfNotesAsText.includes(expectedString), true);
  });

  test.that('method that will return all the note models stored', function() {
    var noteList = new NoteList();
    noteList.createNote('Test Note 1');
    noteList.createNote('Test Note 2');
    expect.toEqual(noteList.getNotes().length, 2)
    expect.toEqual(noteList.getNotes()[0].getNote(), 'Test Note 1')
    expect.toEqual(noteList.getNotes()[1].getNote(), 'Test Note 2')

  });

})(this);
