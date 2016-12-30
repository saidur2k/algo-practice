/*

 LinkedList

 Name your class / constructor (something you can call new on) LinkedList

 LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
 the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
 keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
 same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
 consumer of the data structure.

 length - integer  - How many elements in the list
 push   - function - accepts a value and adds to the end of the list
 pop    - function - removes the last value in the list and returns it
 get    - function - accepts an index and returns the value at that position
 delete - function - accepts an index, removes value from list, collapses,
 and returns removed value

 I would suggest making a second class, a Node class. A Node has two properties, value and next.

 LinkedList is made of a bunch of nodes that point to the next one in the list.
 Every node in a LinkedLists has two properties:
  - the value of whatever is being store, and
  - a pointer to the next node in the list.

 LinkedLists have their ups and downs.
 On one hand, adding and removing is a breeze:
  - you just have the change the next pointer on the previous node and that's it.

 Getting is a pain though: if .get is called you have to loop through the nodes until you get to the right node.
 And that's the tradeoff between LinkedList and ArrayList:
 - LinkedList's adds and deletes are O(1) but the gets are O(n);
 - ArrayList's adds and deletes are O(n) but the gets are O(1).

 So which one is better? It depends!

 If you're doing a bunch of adds and deletes but not many gets, stick to LinkedLists.
 Doing a bunch of gets? ArrayLists. Both? You decide!

 Let's dissect a delete.

 value: [a]   [b]   [c]   [d]
 next:  [ ]-> [ ]-> [ ]-> [ ]-> null

 -> delete is called on index 2 (value 'c')
 -> grab the head (value 'a')
 -> loop through the nexts until you get the index
 before the one to be deleted (value 'b')
 -> change the the next of index 1 to be the next of index 2
 -> decrement length
 -> return the value of the deleted node
 */

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

export class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push (value) {
    const node = new Node(value)
    this.length++

    if (!this.head) {
      this.head = node
    } else {
      this.tail.next = node
    }

    this.tail = node
  }

  pop () {
    return this.delete(this.length - 1)
  }

  _find (value, test = this._test) {
    let current = this.head
    let i = 0
    while (current) {
      if (test(value, current.value, i, current)) {
        return current
      }
      current = current.next
      i++
    }
  }

  _test (a, b) {
    return a === b
  }

  _testIndex (search, __, i) {
    return search === i
  }

  get (index) {
    const node = this._find(index, this._testIndex)
    if (!node) {
      return null
    }
    return node.value
  }

  delete (index) {
    if (index === 0) {
      const head = this.head

      if (head) {
        this.head = this.head.next
      } else {
        this.tail.head = null
      }

      this.length--

      return head.value
    }

    const node = this._find(index - 1, this._testIndex)

    const excise = node.next

    if (!excise) return null

    node.next = excise.next

    if (node.next && !node.next.next) {
      this.tail = node.next
    }
    this.length--

    return excise.value
  }
}
