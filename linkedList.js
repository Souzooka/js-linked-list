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

  return {
    getHead,
    getTail
  };

}