(function() {

  test.that('can get a string of HTML back with 0 objects', function() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    expect.toEqual(noteListView.getHTML(),"<ul></ul>");
  });

  test.that('can get a string of HTML back with 1 object', function() {
    var noteList = new NoteList();
    noteList.createNote('Hello');
    var noteListView = new NoteListView(noteList);
    expect.toEqual(noteListView.getHTML(),'<ul><li><a id="note-0" href="#note-0">Hello</a></li></ul>');
  });

  test.that('can get a string of HTML back with 2 objects', function() {
    var noteList = new NoteList();
    noteList.createNote('Hello');
    noteList.createNote('Goodbye');
    var noteListView = new NoteListView(noteList);
    expect.toEqual(noteListView.getHTML(),'<ul><li><a id="note-0" href="#note-0">Hello</a></li><li><a id="note-1" href="#note-1">Goodbye</a></li></ul>');
  });

  test.that('it only returns 20 first characters', function() {
    var noteList = new NoteList();
    noteList.createNote('Hello this is a long note right here');
    var noteListView = new NoteListView(noteList);
    expect.toEqual(noteListView.getHTML(),'<ul><li><a id="note-0" href="#note-0">Hello this is a long</a></li></ul>');
  });


})(this);
