import { expect } from 'chai'
import { quickSort } from './06-quick_sort'

describe('quickSort', () => {
  it('[] equals []', () => {
    expect(quickSort([])).to.be.deep.equal([])
  })

  it('[1] equals [1]', () => {
    expect(quickSort([1])).to.be.deep.equal([1])
  })

  it('[2, 1] equals [1, 2]', () => {
    expect(quickSort([2, 1])).to.be.deep.equal([1, 2])
  })

  it('[2, 1, 3] equals [1, 2, 3]', () => {
    expect(quickSort([2, 1, 3])).to.be.deep.equal([1, 2, 3])
  })

  it('[10, 8, 2, 1, 6, 3, 9, 4, 7, 5] equals [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    expect(quickSort([10, 8, 2, 1, 6, 3, 9, 4, 7, 5])).to.be.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
