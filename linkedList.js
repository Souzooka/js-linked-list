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
        next: null
      };
      _tail = _head;
    } else {
      _tail.next = {
        value: value,
        next: null
      };
      _tail = _tail.next;
    }
    return _tail;
  }

  function remove(number) {

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

var list = linkedListGenerator();
list.add("nice");
list.add("test");
console.log(list.get(1));