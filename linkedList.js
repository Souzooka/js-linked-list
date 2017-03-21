/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var _head = null;
  var _tail = null;

  function getHead() {
    return _head;
  }

  function getTail() {
    return _tail;
  }

  function add(value) {
    if (_head === null) {
      _head = {
        value: value,
        next: null,
        previous: null
      };
      _tail = _head;
    } else {
      _tail.next = {
        value: value,
        next: null,
        previous: _tail
      };
      _tail = _tail.next;
    }
    return _tail;
  }

  function remove(number) {
    var currentNode = get(number);
    var previousNode = currentNode.previous;
    var futureNode = currentNode.next;

    if (currentNode === false) {
      return false;
    }

    if (number === 0) {
      _head = currentNode.next;
      _head.previous = null;
    }

    if (currentNode.next === null) {
      _tail = previousNode;
    }

    previousNode.next = currentNode.next;
    if (futureNode) {
      futureNode.previous = previousNode;
    }
  }

  function get(number) {
    var current = 0;
    var currentNode = _head;

    if (_head === null) {
      return false;
    }

    while (current !== number) {
      if (currentNode.next === null) {
        return false;
      }
      currentNode = currentNode.next;
      current++;
    }

    return currentNode;
  }

  function insert(value, number) {
    if (number === 0) {
      _head = {
        value: value,
        next: _head
      };
    }

    var currentNode = get(number - 1);
    var nextNode = currentNode.next;

    if (currentNode === false) {
      return false;
    }

    currentNode.next = {
      value: value,
      next: nextNode
    };

  }

  return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert
  };
}
