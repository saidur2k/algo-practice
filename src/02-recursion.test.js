import { fibonacci, factorial } from './02-recursion'
import { expect } from 'chai'

describe('fibonacci - takes one parameter and returns the output: 0, 1, 1, 2, 3, 5, 8 ...', () => {
  it('input sequence #:0 ; output: 1', () => {
    expect(fibonacci(0)).to.be.equal(0)
  })

  it('input sequence #:1 ; output: 1', () => {
    expect(fibonacci(1)).to.be.equal(1)
  })

  it('input sequence #:2 ; output: 1', () => {
    expect(fibonacci(2)).to.be.equal(1)
  })

  it('input sequence #:3 ; output: 2', () => {
    expect(fibonacci(3)).to.be.equal(2)
  })

  it('input sequence #:4 ; output: 3', () => {
    expect(fibonacci(4)).to.be.equal(3)
  })

  it('input sequence #:5 ; output: 5', () => {
    expect(fibonacci(5)).to.be.equal(5)
  })

  it('input sequence #:6 ; output: 8', () => {
    expect(fibonacci(6)).to.be.equal(8)
  })
})

describe('factorial', () => {
  it('input 0, equal 1', () => {
    expect(factorial(0)).to.be.equal(1)
  })

  it('input 1, equal 1', () => {
    expect(factorial(1)).to.be.equal(1)
  })

  it('input 2, equal 2', () => {
    // 2 * 1
    expect(factorial(2)).to.be.equal(2)
  })

  it('input 3, equal 6', () => {
    // 3 * 2 * 1
    expect(factorial(3)).to.be.equal(6)
  })

  it('input 4, equal 24', () => {
    // 4 * 3 * 2 * 1
    expect(factorial(4)).to.be.equal(24)
  })
})
