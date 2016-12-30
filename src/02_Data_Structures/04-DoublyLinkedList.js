/*
 A doubly-linked list takes all the functionality of a singly-linked list and extends it for bi-directional movement in
 a list. We can traverse, in other words, a linked list from the first node in the list to the last node in the list;
 and we can traverse from the last node in the list to the first node in the list.
 */

class Node {
  constructor (value) {
    this.value = value
    // points to the next node in the list
    this.next = null
    // points to the previous node in the list
    this.previous = null
  }
}

export class DoublyLinkedList {
  constructor () {
    // stores the number of nodes in a list.
    this.length = 0

    // Since every instance of a DoublyLinkedList is instantiated without nodes, the default values of head and
    // tail are set to null.

    // assigns a node as the head of a list
    this.head = null

    // assigns a node as the tail of a list
    this.tail = null
  }

  /*
   adds a node to a list
   ---------------------

   In this method, we have two scenarios:

   First, if a list is empty, then assign to its head and tail the node being added.

   Second, if the list contains nodes, then find the tail of the list and assign to tail.next the node being added;
   likewise, we need to configure the new tail for bi-directional movement.
   We need to set, in other words, tail.previous to the original tail.
   */
  push (value) {
    var node = new Node(value)

    if (this.length) {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    } else {
      this.head = node
      this.tail = node
    }

    this.length++

    return node
  }

  /*
   Removes the last node from a list
   */
  pop () {
    return this.remove(this.length - 1)
  }
  /*
   searches for a node at provided index in our list
   -------------------------------------------------
   */
  searchNodeAt (index) {
    let currentNode = this.head

    // 1st use-case: an invalid position
    if (this.length === 0 || index < 0 || index > this.length) {
      return null
    }

    // 2nd use-case: a valid position
    currentNode = this.get(index)

    return currentNode
  }

  get (index) {
    let count = 0
    let currentNode = this.head

    while (count < index) {
      currentNode = currentNode.next
      count++
    }

    return currentNode
  }

  /*
   removes a node from a list
   --------------------------
   handles four use cases:

   The position being passed as an argument of remove(index) is non-existent. In this case, we throw an error.

   The position being passed as an argument of remove(index) is the first node (head) of a list.
   If this is the case, we will assign deletedNode to head and then reassign head to the next node in the list.
   At this moment, we must consider if our list has more than one node.
   If the answer is no, head will be assigned to null and we will enter the if part of our if-else statement.
   In the body of if, we must also set tail to null—in other words, we return to the original state of an empty
   doubly-linked list. If we are removing the first node in a list and we have more than one node in our list, we
   enter the else section of our if-else statement. In this case, we must correctly set the previous property of head
   to null—there are no nodes before the head of a list.

   The position being passed as an argument of remove(index) is the tail of a list.
   First, deletedNode is assigned to tail.
   Second, tail is reassigned to the node previous to the tail.
   Third, the new tail has no node after it and needs its value of next to be set to null.

   We break our while loop once currentNode is pointing to the node at the position being passed as an argument to
   remove(index). At this moment, we reassign the value of beforeNodeToDelete.next to the node after nodeToDelete
   and, conversely, we reassign the value of afterNodeToDelete.previous to the node before nodeToDelete. In other
   words, we remove pointers to the removed node and reassign them to the correct nodes. Next, we assign deletedNode
   to nodeToDelete. Finally, we assign nodeToDelete to null.

   Finally, we decrement the length of our list and return deletedNode
   */
  remove (index) {
    let currentNode = this.head
    let beforeNodeToDelete = null
    let nodeToDelete = null
    let count = 0

    // the first node is removed
    if (index === 0) {
      this.head = currentNode.next
      nodeToDelete = currentNode
      // there is a second node
      if (!this.head) {
        this.head.previous = null
      } else {
        // there is no second node
        this.tail = null
      }
    } else if (index === this.length - 1) { // the last node is removed
      nodeToDelete = this.tail
      this.tail = this.tail.previous
      this.next = null
    } else { // a middle node is removed
      while (count < index) {
        currentNode = currentNode.next
        count++
      }
      beforeNodeToDelete = currentNode.previous
      beforeNodeToDelete.next = currentNode
      nodeToDelete = currentNode
      currentNode = currentNode.next
      currentNode.previous = beforeNodeToDelete
    }

    this.length--

    return nodeToDelete
  }
}
