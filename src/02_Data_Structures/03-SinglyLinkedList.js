/*
 In computer science, a singly-linked list is a data structure that holds a sequence of linked nodes.
 Each node, in turn, contains data and a pointer, which can point to another node.

 Nodes of a singly-linked list are very similar to steps in a scavenger hunt.
 Each step contains a message
 - e.g. "You've reached France" and
 - pointers to the next step (e.g. "Visit these latitude and longitude coordinates").

 When we start sequencing these individual steps to form a sequence of steps, we are creating a scavenger hunt.
 */

class Node {
  constructor (value) {
    // stores a value
    this.value = value

    // point to the next node in the list
    this.next = null
  }
}

class SinglyLinkedList {
  constructor () {
    // retrieves the number of nodes in a list.
    this.length = 0

    // assigns a node as the head of a list
    this.head = null
  }

  /*
   Add a node to the list
   -----------------------
   Use the argument of push(value) to create a new instance of a Node, which is assigned to a variable named node.
   We also declare a variable named currentNode and initialize it to the head of our list.
   If there are no nodes in the list, then the value of head is null.

   After this point in our code, we handle two use cases.

   The first use case considers adding a node to an empty list.
   If head does not point to a node, then assign node as the head of our list, increment the length of our list by
   one, and return node.

   The second use case considers adding a node to a non-empty list. We enter the while loop, and during each
   iteration, we evaluate if currentNode.next points to another node. (During the first iteration, currentNode is
   always pointing to the head of a list.)

   If the answer is no, we assign node to currentNode.next and return node.

   If the answer is yes, we enter the body of the while loop. Inside the body, we reassign currentNode to
   currentNode.next. This process is repeated until currentNode.next no longer points to another node. In other
   words, currentNode points to the last node of our list.

   The while loop breaks. Finally, we assign node to currentNode.next, we increment length by one, and then we return
   node.

   */
  push (value) {
    var node = new Node(value)
    var currentNode = this.head

    // 1st use-case: an empty list
    if (!currentNode) {
      this.head = node
      this.length++
      return node
    }

    // 2nd use-case: a non-empty list
    while (currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = node
    this.length++

    return node
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
   Search for a node at n-position in our list
   -------------------------------------------
   The if statement checks for the first use case: an invalid position is passed as an argument.

   If the index passed to searchNodeAt(index) is valid, then we reach the second use case—the while loop.
   During each iteration of the while loop, currentNode—which first points to head—is reassigned to the next node in
   the list. This iteration continues until count is equal to position.

   When the loop finally breaks, currentNode is returned.
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

  /*
   Removes the last node from a list
   */
  pop () {
    return this.remove(this.length - 1)
  }

/*
 Removes a node from a list
 ---------------------------
 Our implementation of remove(position) involves three use cases:
 - An invalid position is passed as an argument.
 - A position of one (head of a list) is passed as an argument.
 - An existent position (not the first position) is passed as an argument.

 The first and second use cases are the simplest to handle.
 In regards to the first scenario, if the list is empty or a non-existent position is passed, an error is thrown.

 The second use case handles the removal of the first node in the list, which is also head.
 If this is the case, then the following logic occurs:

 head is reassigned to currentNode.next.
 deletedNode points to currentNode.
 currentNode is reassigned to null.
 Decrement _length of our list by one.
 deletedNode is returned.

 The third scenario is the hardest to understand.
 The complexity stems from the necessity of tracking two nodes during each iteration of a while loop.
 During each iteration of our loop, we track both the node before the node to be deleted and the node to be deleted.
 When our loop eventually reaches the node at the position we want to remove, the loop terminates.

 At this point, we hold references to three nodes: beforeNodeToDelete, nodeToDelete, and deletedNode.
 Prior to deleting nodeToDelete, we must assign its value of next to the next value of beforeNodeToDelete.
 If the purpose of this step seems unclear, remind yourself that we have a list of linked nodes; just removing a node
 breaks the link from the first node of the list to the last node of the list.

 Next, we assign deletedNode to nodeToDelete. Then we set the value of nodeToDelete to null, decrement the length of
 the list by one, and return deletedNode.

 */
  remove (index) {
    let currentNode = this.head
    let deletedNode = null
    let beforeNodeToDelete = null
    let nodeToDelete = null

    // check node is valid
    this.searchNodeAt(index)

    // the first node is removed
    if (index === 0) {
      this.head = currentNode.next
      deletedNode = currentNode
      currentNode = null
      this.length--

      return deletedNode
    }

    // any other node is removed
    beforeNodeToDelete = this.searchNodeAt(index - 1)
    nodeToDelete = beforeNodeToDelete.next

    beforeNodeToDelete.next = nodeToDelete.next
    deletedNode = nodeToDelete
    nodeToDelete = null
    this.length--
    return deletedNode
  }
}

export { SinglyLinkedList }
