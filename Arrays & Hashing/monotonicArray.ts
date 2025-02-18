function isMonotonic(nums: number[]): boolean {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] >= nums[i - 1]) {
        isIncreasing = isIncreasing && true;
      } else {
        isIncreasing = false;
      }

      if (nums[i] <= nums[i - 1]) {
        isDecreasing = isDecreasing && true;
      } else {
        isDecreasing = false;
      }
    }

    return isDecreasing || isIncreasing
};

console.log(isMonotonic([1, 2, 3, 4, 3, 2, 8]))