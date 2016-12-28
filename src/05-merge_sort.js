/*
 Merge sort is actually very useful and one of the easier divide-and-conquer algorithms to understand. It's easier to
 conceptualize than some of the other ones. A key to merge sort is that it is recursive.

 The basic gist of merge sort is that you're going to take your big list, and first divide down in two half size lists
 and recursively call merge sort on those smaller list, which in turn will do the same. The base case is when you have
 a list of one, at which point you will return that sorted list of one. On the way up the recursive calls, you will
 merge those sorted lists together (preferably by another merge function you'll write) that walks through both lists
 simultaneously and inserts the smaller value first, effectively creating a bigger sorted list.

 This combined merge with the divide-and-conquer recursion proves to be pretty effective. When you call
 Array.prototype.sort it often uses MergeSort (depending on the engine and the types of the elements in the array.)
 MergeSort is also stable which just means if you have equivalent elements, it will keep their original order in the
 array. This is sometimes important and sometimes not.

 MergeSort's Big O is O(n log n). Weird, right? We obviously have to compare everything once, but we don't have to
 compare everything to everything like we do with bubble sort. Rather we just to have to compare to their local lists
 as we sort. Not too bad.

 MergeSort's space complexity is a bit worse than the previous algorithms at O(n) since we have to create new lists as
 we go. It's not awful but it nonetheless a consideration.
 */

var stitch = (leftArray, rightArray) => {
  var newArray = []

  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      newArray.push(leftArray.shift())
    }
    if (leftArray[0] > rightArray[0]) {
      newArray.push(rightArray.shift())
    }
  }

  return [...newArray, ...leftArray, ...rightArray]
}

export var mergeSort = (nums) => {
  let newArray = []

  if (nums.length < 2) {
    newArray.push(...nums)
    return newArray
  }

  const middle = Math.floor(nums.length / 2)
  const leftArray = nums.slice(0, middle)
  const rightArray = nums.slice(middle, nums.length)
  const mergedLeft = mergeSort(leftArray)
  const mergedRight = mergeSort(rightArray)

  return stitch(mergedLeft, mergedRight)
}
