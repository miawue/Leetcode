function isMonotonic(nums: number[]): boolean {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < nums.length; i++) {
    const currentNum = nums[i]
    const prevNum = nums[i - 1]

    // console.log('Prev num: ', prevNum, 'Current num: ', currentNum)

    if (prevNum < currentNum) {
      // console.log('Array is not decreasing')
      isDecreasing = false;
    }

    if (prevNum > currentNum) {
      // console.log('Array is not increasing')
      isIncreasing = false;
    }
  }

  return isDecreasing || isIncreasing
};

const testCases: [number[], boolean][] = [
    [[1, 2, 2, 3], true],
    [[6, 5, 4, 4], true],
    [[1, 3, 2], false],
    [[1, 2, 3, 4], true],
    [[5, 5, 5, 5], true],
    [[1, 2, 2, 1], false],
];

// Пример использования тестов
testCases.forEach(([input, expected]) => {
    const result = isMonotonic(input);
    console.log(`isMonotonic(${input}) = ${result}, ожидаемый результат: ${expected}`);
});
