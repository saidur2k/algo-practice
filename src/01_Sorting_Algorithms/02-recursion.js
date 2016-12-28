/*
 Recursion is when you define something in terms of itself.
 Has anyone ever used the word you wanted defined in the definition that they gave you?
 "What is a computer?"
 "It's something that computes things."
 This would be a recursive definition.

 When we talk about recursion in computer science, we are talking about a function that calls itself.
 This technique is especially adept at some problems because of its ability to maintain state at different levels
 of recursion.

 While recursion can make the code very simple for some problems, it inherently carries a potentially large footprint
 with it as every time you call the function, it adds another call to the stack. Some problems therefore are better
 solved in a slightly-more-complicated-but-more-efficient way of iteration (loops) instead of recursion.
 */

// very inefficient version of fibonaccci
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
