/*
  not useful, don't use in production code :)
  sort: [5, 6, 4, 7]

  first step: [5, 4, 6 , 7]
  second step: [4, 5, 6, 7]

  swap items until they are in order

  wildly inefficient algorithm

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
