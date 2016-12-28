/*
 It's amongst the least efficient in terms of worst case scenario.

 In bubble sort, we're going to loop through the array and compare each index with the index next to it.
 If those two numbers are out of order (the lesser index's value is greater than the greater index's value) we swap
 those two numbers' places in the array. We keep looping over that array until everything is in place and nothing was
 swapped during the last iteration.

 What's the Big O on this? Well, there's an inner loop to check to see if indexes need to be swapped, and an outer loop
 that's just checking to see if anything was swapped. That would be make it O(n²). Not efficient, but a great learning
 tool. You'll never use bubble sort for anything serious.
 */
var bubbleLoop = function (iArray) {
  let newArray = iArray.splice(0)
  do {
    var swapped = false
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] > newArray[i + 1]) {
        let temp = newArray[i]
        newArray[i] = newArray[i + 1]
        newArray[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)

  return newArray
}

export { bubbleLoop }
