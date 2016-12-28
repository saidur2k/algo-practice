/*
 ArrayList

 We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
 going to implement an array using objects. We should not use arrays at all in this exercise, just
 objects. Make a class (or constructor function; something you can call new on) called ArrayList.
 ArrayList should have the following properties:

 length - integer  - How many elements in the array
 push   - function - accepts a value and adds to the end of the list
 pop    - function - removes the last value in the list and returns it
 get    - function - accepts an index and returns the value at that position
 delete - function - accepts an index, removes value from list, collapses,
 and returns removed value

 */
export class ArrayList {
  constructor () {
    this.data = {}
    this.length = 0
  }

  size () {
    return this.length
  }

  lastItemIndex () {
    return this.length - 1
  }

  push (item) {
    this.data[this.length] = item
    this.length++
  }

  pop () {
    return this.delete(this.lastItemIndex())
  }

  get (index) {
    return this.data[index]
  }

  delete (index) {
    var temp = this.data[index]
    this._collapseTo(index)
    return temp
  }

  _collapseTo (index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.length--
  }
}
