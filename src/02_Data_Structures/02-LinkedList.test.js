import { expect } from 'chai'
import { LinkedList } from './02-LinkedList'

describe('LinkedList', function () {
  const range = length => Array.apply(null, {length: length}).map(Number.call, Number)
  const abcRange = length => range(length).map(num => String.fromCharCode(97 + num))
  let list

  beforeEach(() => {
    list = new LinkedList()
  })

  it('constructor', () => {
    expect(list).to.be.an.instanceOf(LinkedList)
  })

  it('push', () => {
    abcRange(26).map(character => list.push(character))
    expect(list.length).to.be.equal(26)
  })

  it('pop', () => {
    abcRange(13).map(character => list.push(character))
    expect(list.length).to.be.equal(13)
    range(10).map(() => list.pop())
    expect(list.length).to.be.equal(3)
    expect(list.pop()).to.be.equal('c')
  })

  it('get', () => {
    list.push('first')
    expect(list.get(0)).to.be.equal('first')
    list.push('second')
    expect(list.get(1)).to.be.equal('second')
    expect(list.get(0)).to.be.equal('first')
    abcRange(26).map(character => list.push(character))
    expect(list.get(27)).to.be.equal('z')
    expect(list.get(0)).to.be.equal('first')
    expect(list.get(9)).to.be.equal('h')
    list.pop()
    expect(list.get(list.length - 1)).to.be.equal('y')
  })

  it('delete', () => {
    abcRange(26).map(character => list.push(character))
    list.delete(13)
    expect(list.length).to.be.equal(25)
    expect(list.get(12)).to.be.equal('m')
    expect(list.get(13)).to.be.equal('o')
    list.delete(0)
    expect(list.length).to.be.equal(24)
    expect(list.get(0)).to.be.equal('b')
  })
})
