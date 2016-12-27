export var insertionSort = (nums) => {
  let newArr = nums.slice(0)
  for (let i = 1; i < newArr.length; i++) {
    for (let j = 0; j < i; j++) {
      console.log(newArr[j], newArr[i])
      if (newArr[i] < newArr[j]) {
        const spliced = newArr.splice(i, 1)
        newArr.splice(j, 0, spliced[0])
      }
    }
  }
  return newArr
}

