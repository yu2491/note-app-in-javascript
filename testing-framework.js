var test = {
  that: function(description, fn) {
    try {
      console.log(description + ':')
      fn();
    } catch (error) {
      console.error(error);
    }
  }
}

var expect = {
  toEqual: function(actual,expected) {
      if(actual === expected) {
        console.log('\x1b[32m%s\x1b[0m', 'Test Passed \u2714 ');
      } else {
        console.log('\x1b[31m%s\x1b[0m', 'Test Failed \u2718 ');
        console.log('\x1b[31m%s\x1b[0m', 'expected: ' + expected)
        console.log('\x1b[31m%s\x1b[0m', 'got: ' + actual)
      }
  }
};
