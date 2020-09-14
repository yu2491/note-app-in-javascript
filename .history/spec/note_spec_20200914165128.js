(function(){
  'use strict';

  function it(description, fn) {
    try {
      fn();
      console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + description);
    } catch (error) {
      console.log('\n');
      console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + description);
      console.error(error);
    }
  }

  function assert(isTrue) {
    if (!isTrue) {
      throw new Error();
    }
  }

  it('return the note text', function() {
    var note = new Note('text');
    assert(note.getNote() === 'text')
  })

})(this);
