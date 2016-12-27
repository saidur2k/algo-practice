/* very inefficient version of fibonaccci */
var fibonacci = function (n) {
  if (n === 0) {
    return 0
  } else if (n <= 2) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

var factorial = function (n) {
  if (n < 2) { return 1 }
  return n * factorial(n - 1)
}

export { fibonacci, factorial }
