function majorityElement(nums: number[]): any {
  const hashMap = new Map();
  for (const elem of nums) {
      const elemInMap = hashMap.get(elem);
      hashMap.set(elem, (elemInMap || 0) + 1);

      if (hashMap.get(elem) > nums.length / 2) {
          return elem;
      }
  }
}

console.log(majorityElement([3,2,3])) // 3
console.log(majorityElement([2,2,1,1,1,2,2])) // 2