function removeElement(nums: number[], val: number): any {
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]
    if (currentNum === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums
};

console.log(removeElement([3,2,2,3], 3)) // nums = [2,2]