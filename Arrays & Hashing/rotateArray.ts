const nums = [-1,-100,3,99]

function reverseArr(nums: number[], start: number, end: number) {
  while (start < end) {
    const temStart = nums[start]
    nums[start] = nums[end]
    nums[end] = temStart
    start++
    end--
  }

  return nums
}

function rotate(nums: number[], k: number): void {
  k = k % nums.length
  let leftPointer = 0
  let rightPointer = nums.length - 1

  nums = reverseArr(nums, leftPointer, rightPointer)


  leftPointer = 0;
  rightPointer = k - 1
  nums = reverseArr(nums, leftPointer, rightPointer)

  leftPointer = k;
  rightPointer = nums.length - 1
  nums = reverseArr(nums, leftPointer, rightPointer)
};

rotate(nums, 2)
console.log(nums) // [3,99,-1,-100]