import { expect } from 'chai'
import { ArrayList } from './01-ArrayList'

describe('ArrayList', function () {
  const range = length => Array.apply(null, {length: length}).map(Number.call, Number)
  const abcRange = length => range(length).map(num => String.fromCharCode(97 + num))

  let list

  beforeEach(() => {
    list = new ArrayList()
  })

  it('constructor', () => {
    expect(list).to.be.an.instanceof(ArrayList)
  })

  it('push', () => {
    abcRange(26).map(character => list.push(character))
    expect(list.length).to.equal(26)
  })

  it('pop', () => {
    abcRange(13).map(character => list.push(character))
    expect(list.length).to.equal(13)
    range(10).map(() => list.pop())
    expect(list.length).to.equal(3)
    expect(list.pop()).to.equal('c')
  })

  it('get', () => {
    list.push('first')
    expect(list.get(0)).to.equal('first')
    list.push('second')
    expect(list.get(1)).to.equal('second')
    expect(list.get(0)).to.equal('first')
    abcRange(26).map(character => list.push(character))
    expect(list.get(27)).to.equal('z')
    expect(list.get(0)).to.equal('first')
    expect(list.get(9)).to.equal('h')
    list.pop()
    expect(list.get(list.length - 1)).to.equal('y')
  })

  it('delete', () => {
    abcRange(26).map(character => list.push(character))
    list.delete(13)
    expect(list.length).to.equal(25)
    expect(list.get(12)).to.equal('m')
    expect(list.get(13)).to.equal('o')
    list.delete(0)
    expect(list.length).to.equal(24)
    expect(list.get(0)).to.equal('b')
  })

  it('size', () => {
    var testCase = new ArrayList()
    testCase.push(1)
    testCase.push(2)
    testCase.push(3)
    testCase.pop()
    expect(testCase.size()).to.be.equal(2)
  })
})
