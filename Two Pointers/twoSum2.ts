function twoSum(numbers: number[], target: number): any {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    while (leftPointer < rightPointer) {
      const leftNum = numbers[leftPointer]
      const rightNum = numbers[rightPointer]
      const sum = leftNum + rightNum

      if (sum === target) return [leftPointer + 1, rightPointer + 1]

      if (sum > target) {
        rightPointer--
      } else {
        leftPointer++
      }
    }
};

// Тесткейсы
console.log(twoSum([2,7,11,15], 9)); // [1,2]
console.log(twoSum([2,3,4], 6)); // [1,3]  
console.log(twoSum([-1,0], -1)); // [1,2]
console.log(twoSum([0,0,3,4], 0)); // [1,2]
console.log(twoSum([5,25,75], 100)); // [2,3]
