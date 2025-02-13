function containsDuplicate(nums: number[]): boolean {
  const noDuplicates = new Set(nums)
  return noDuplicates.size !== nums.length
};

console.log(containsDuplicate([1, 2, 3]))
console.log(containsDuplicate([1, 2, 3, 1]))
