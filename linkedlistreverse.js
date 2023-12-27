 function reverseLinkedList(linkedlist) {
  var node = linkedlist;
  var previous = null;

  while(node) {
    // save next or you lose it!!!
    var save = node.next;
    // reverse pointer
    node.next = previous;
    // increment previous to current node
    previous = node;
    // increment node to next node or null at end of list
    node = save;
  }
  return previous;   // Change the list head !!!
}

console.log(reverseLinkedList([1,2,3,4]))