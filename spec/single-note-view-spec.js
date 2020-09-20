(function() {

  test.that('a single note returns a string of HTML', function() {
    let singleNote = new SingleNoteView(new Note(0, "Favourite drink: seltzer"));
    expect.toEqual(singleNote.html(),'<div>Favourite drink: seltzer</div>')
  });

})(this);
