function circularLinkedListGenerator() {

  var _start = null;
  var _length = 0;

  function getLength() {
    return _length;
  }

  function getStart() {
    return _start;
  }

  function insert(index, value) {
    var node;
    if (_start === null) {
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
        _length++;
        return node;
      }

      index = index % _length + 1;
      console.log(index);
      console.log(_length);

      currentNode = get(index-1);
      nextNode = get(index);

      console.log(currentNode);
      console.log(nextNode);

      node = {
        value:value,
        next:nextNode
      };

      currentNode.next = node;
      _length++;
      return node;
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

  function remove(index) {
    if (_start === null) {
      return null;
    }

    if (index === 0) {
      console.log(get(_length-2));
      _start = _start.next;
    }
  }

  return {
    getStart,
    insert,
    get,
    remove,
    getLength
  };



}

var list = circularLinkedListGenerator();

list.insert(12, "dogs");
list.insert(1, "bears")
list.insert(2, "worms")
list.insert(3, "eh")
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));
list.remove(0);