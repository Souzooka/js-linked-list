function circularLinkedListGenerator() {

  var _start = null;
  var _length = 0;


  function getStart() {
    return _start;
  }

  function insert(index, value) {
    var node;
    if (_length === 0) {
      _start = {
        value: value,
        next: null
      };
      _start.next = _start;
      _length = 1;
      return _start;
    } else {

      if (index === 0) {
        node = {
          value: value,
          next: _start
        };
        _start.next = node;
        _start = node;
        return node;
      }

      index = index % _length + 1;



    }
  }

  return {
    getStart,
    insert
  };



}

var list = circularLinkedListGenerator();

list.insert(12, "dogs");
console.log(list.insert(0, "fish"));