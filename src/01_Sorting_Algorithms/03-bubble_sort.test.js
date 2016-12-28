import { bubbleLoop } from './03-bubble_sort'
import { expect } from 'chai'

describe('bubble sort', () => {
  it('should sort correctly with 10 items in array', () => {
    let nums = [10, 3, 5, 6, 8, 9, 7, 2, 4, 1]
    expect(bubbleLoop(nums)).to.be.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  it('should sort correctly in 3 items in array', () => {
    expect(bubbleLoop([1, 3, 2])).to.be.deep.equal([1, 2, 3])
  })

  it('should sort correctly in 4 items in array', () => {
    expect(bubbleLoop([4, 3, 2, 1])).to.be.deep.equal([1, 2, 3, 4])
  })
})
