const nums1 = [0,0,1,1,1,1,2,3,3]

function removeDuplicatesTwo(nums: number[]): any {
    const hashMap = new Map()
    for (let i = 0; i < nums.length; i++) {
      const currentElem = nums[i]
      hashMap.set(currentElem, (hashMap.get(currentElem) || 0) + 1)
      if (hashMap.get(currentElem) > 2) {
        nums.splice(i, 1)
        i--
      }
    }
};

removeDuplicatesTwo(nums1)
console.log(nums1) // [0,0,1,1,2,3,3]