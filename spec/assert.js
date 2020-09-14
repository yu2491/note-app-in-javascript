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

  it('should pass', function() {
    assert(1 == 1);
  })

  it('should fail', function() {
    assert(1 !== 1);
  })

  it('testCircleRadiusDefaultsTo10', function() {
    var circle = new Circle();
    assert(circle.radius === 10);
  })

  // (function(exports) {
  //   function testCircleRadiusDefaultsTo10() {
  //     var circle = new Circle();
  //     assert.isTrue(circle.radius === 10);
  //   };
  //
  //   testCircleRadiusDefaultsTo10();
  // })(this);

})(this);
