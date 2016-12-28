import { expect } from 'chai'
import { insertionSort } from './04-insertion_sort'

describe('insertion sort', () => {
  it('sort [1]', () => {
    expect(insertionSort([1])).to.be.deep.equal([1])
  })

  it('sort [2, 1]', () => {
    expect(insertionSort([2, 1])).to.be.deep.equal([1, 2])
  })

  it('sort [5, 3, 6, 1]', () => {
    expect(insertionSort([5, 3, 6, 1])).to.be.deep.equal([1, 3, 5, 6])
  })
})
