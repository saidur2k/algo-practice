import { expect } from 'chai'
import { DoublyLinkedList } from './04-DoublyLinkedList'

describe('Doubly Linked List', () => {
  it('push', () => {
    let list = new DoublyLinkedList()
    list.push(0)
    expect(list.get(0).value).to.be.equal(0)
    list.push(1)
    expect(list.get(1).value).to.be.equal(1)
    list.push(2)
    list.push(3)
    expect(list.get(3).value).to.be.equal(3)
  })

  it('can searchNodeAt', () => {
    let list = new DoublyLinkedList()
    list.push(0)
    list.push(1)
    list.push(2)
    list.push(3)
    expect(list.searchNodeAt(0).value).to.be.equal(0)
    expect(list.searchNodeAt(1).value).to.be.equal(1)
    expect(list.searchNodeAt(2).value).to.be.equal(2)
    expect(list.searchNodeAt(3).value).to.be.equal(3)
    expect(list.searchNodeAt(4)).to.be.null
    expect(list.searchNodeAt(2).value).to.be.equal(2)
    expect(list.searchNodeAt(-4)).to.be.null
  })

  it('can pop', () => {
    let list2 = new DoublyLinkedList()
    list2.push(0)
    list2.push(1)
    list2.push(2)
    list2.push(3)
    expect(list2.pop().value).to.be.equal(3)
    expect(list2.pop().value).to.be.equal(2)
    expect(list2.pop().value).to.be.equal(1)
    expect(list2.pop().value).to.be.equal(0)
  })
})
