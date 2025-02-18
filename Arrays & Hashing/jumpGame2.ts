function jump(nums: number[]): number {
  let counter = 0
  let farthest = 0
  let currentEnd = 0
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i])
    if (i === currentEnd) {
      currentEnd = farthest
      counter++
    }
  }
  return counter
};

console.log(jump([2,3,1,1,4])) // 2
console.log(jump([2, 3, 0, 1, 4])) // 2