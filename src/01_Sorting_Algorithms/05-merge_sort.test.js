import { expect } from 'chai'
import { mergeSort, medianValue } from './05-merge_sort'

describe('merge sort', () => {
  it('sorts array of 1 item correctly', () => {
    expect(mergeSort([1])).to.deep.equal([1])
  })

  it('sorts 1 array of 2 items correctly', () => {
    expect(mergeSort([2, 1])).to.deep.equal([1, 2])
  })

  it('sorts array of 6 items correctly', () => {
    expect(mergeSort([1, 5, 6, 2, 7, 8])).to.deep.equal([1, 2, 5, 6, 7, 8])
  })

  it('sorts array of 7 items correctly', () => {
    expect(mergeSort([9, 1, 5, 6, 2, 7, 8])).to.deep.equal([1, 2, 5, 6, 7, 8, 9])
  })

  it('sorts array of 8 items correctly', () => {
    expect(mergeSort([9, 1, 5, 6, 2, 7, 8, 3])).to.deep.equal([1, 2, 3, 5, 6, 7, 8, 9])
  })

  it('sorts array of 9 items correctly', () => {
    expect(mergeSort([9, 1, 5, 6, 4, 2, 7, 8, 3])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('sorts array of 10 items correctly', () => {
    expect(mergeSort([9, 1, 10, 5, 6, 4, 2, 7, 8, 3])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

describe('median value - reuse stitch', () => {
  it('array of 1 item correctly', () => {
    expect(medianValue([1])).to.deep.equal(1)
  })

  it('array of 2 items correctly', () => {
    expect(medianValue([2, 1])).to.deep.equal(2)
  })

  it('array of 6 items correctly', () => {
    expect(medianValue([1, 5, 6, 2, 7, 8])).to.deep.equal(6)
  })

  it('array of 7 items correctly', () => {
    expect(medianValue([9, 1, 5, 6, 2, 7, 8])).to.deep.equal(6)
  })

  it('array of 8 items correctly', () => {
    expect(medianValue([9, 1, 5, 6, 2, 7, 8, 3])).to.deep.equal(6)
  })

  it('array of 9 items correctly', () => {
    expect(medianValue([9, 1, 5, 6, 4, 2, 7, 8, 3])).to.deep.equal(5)
  })

  it('array of 10 items correctly', () => {
    expect(medianValue([9, 1, 10, 5, 6, 4, 2, 7, 8, 3])).to.deep.equal(6)
  })
})
