function twoSum(nums: number[], target: number): number[] {
    const hash = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      const neededNum = target - num
      if (hash.has(neededNum)) {
        return [hash.get(neededNum) ?? -1, i]
      } else {
        hash.set(num, i)
      }
    }
    return []
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
