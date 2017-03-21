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


  function get(index) {
    var currentNode = _start;

    if (_start === null) {
      return false;
    }

    if (index === 0) {
      return _start;
    }

    index = index % _length + 1;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;


  }

  return {
    getStart,
    insert,
    get
  };



}

var list = circularLinkedListGenerator();

list.insert(12, "dogs");
console.log(list.insert(0, "fish"));
console.log(list.get(1));