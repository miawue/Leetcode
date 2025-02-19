function productExceptSelf(nums: number[]): number[] {
  const result = new Array(nums.length).fill(1);

    let leftSide = 1
    for (let i = 0; i < nums.length; i++) {
      result[i] = leftSide
      leftSide *= nums[i]
    }

    let rightSide = 1
    for (let i = nums.length - 1; i >= 0; i--) {
      result[i] *= rightSide
      rightSide *= nums[i]
    }

    return result
};

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])) // [0,0,9,0,0]
console.log(productExceptSelf([0,0])) // [0,0]
console.log(productExceptSelf([1,-1])) // [-1,1]
