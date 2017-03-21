function circularLinkedListGenerator() {

  var _start = null;
  var _length = 0;


  function getStart() {
    return _start;
  }

  function insert(index, value) {
    if (_length === 0) {
      _start = {
        value: value,
        next: null
      };
      _start.next = _start;
      length = 1;
      return _start;
    } else {

    }
  }

  return {
    getStart,
    insert
  };



}

console.log(circularLinkedListGenerator().insert(21, "dog"));