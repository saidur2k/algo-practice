var fibonacci = function(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

/* very inefficient version of fibonaccci */
for (let i = 1; i<= 20; i+=1){
  console.log(i, fibonacci(i));
}

var factorial = function(n) {
  if (n <= 1) { return 1; }
  return n * factorial(n-1);
}

for (let i = 1; i<= 20; i+=1){
  console.log(i, factorial(i));
}


factorial(1); // 1
factorial(2); // 2
factorial(3); // 1 * 2 * 3
console.log('Finish');