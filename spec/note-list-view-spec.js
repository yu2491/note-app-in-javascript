(function() {

  test.that('can get a string of HTML back with 0 objects', function() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    expect.toEqual(noteListView.getHTML(),"<ul><li></li></ul>");
  });

  test.that('can get a string of HTML back with 1 object', function() {
    var noteList = new NoteList();
    noteList.createNote('Hello');
    var noteListView = new NoteListView(noteList);
    expect.toEqual(noteListView.getHTML(),"<ul><li>Hello</li></ul>");
  });

  test.that('can get a string of HTML back with 2 objects', function() {
    var noteList = new NoteList();
    noteList.createNote('Hello');
    noteList.createNote('Goodbye');
    var noteListView = new NoteListView(noteList);
    expect.toEqual(noteListView.getHTML(),"<ul><li>Hello</li><li>Goodbye</li></ul>");
  });

  test.that('it only returns 20 first characters', function() {
    var noteList = new NoteList();
    noteList.createNote('Hello this is a long note right here');
    var noteListView = new NoteListView(noteList);
    expect.toEqual(noteListView.getHTML(),"<ul><li>Hello this is a long</li></ul>");
  });


})(this);
