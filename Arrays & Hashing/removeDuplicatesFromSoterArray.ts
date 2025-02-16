const nums = [1,1,2]

function removeDuplicates(nums: number[]): any {
    const hashMap = new Set()
    for (let i = 0; i < nums.length; i++) {
      const currentElem = nums[i]
      if (hashMap.has(currentElem)) {
        nums.splice(i, 1)
        i--
      } else {
        hashMap.add(currentElem)
      }
    }
};

removeDuplicates(nums)
console.log(nums) // [1,2]