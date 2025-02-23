//@ts-ignore
Array.prototype.groupBy = function(fn) {
  return this.reduce((acc, cur) => {
    const key = fn(cur)
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(cur)
    return acc
  }, {})
}

function testGroupBy() {
  const testCases = [
    {
      input: [1, 2, 3, 4, 5],
      fn: (num) => (num % 2 === 0 ? 'even' : 'odd'),
      expected: {
        odd: [1, 3, 5],
        even: [2, 4],
      },
    },
    {
      input: ['apple', 'banana', 'apricot', 'blueberry'],
      fn: (fruit) => fruit[0],
      expected: {
        a: ['apple', 'apricot'],
        b: ['banana', 'blueberry'],
      },
    },
  ];

  testCases.forEach(({ input, fn, expected }, index) => {
    //@ts-ignore
    const result = input.groupBy(fn);
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
      throw new Error(`Ошибка в тесте ${index + 1}: ожидался ${JSON.stringify(expected)}, но получен ${JSON.stringify(result)}.`);
    } else {
      console.log(`Тест ${index + 1} пройден: ${JSON.stringify(result)}`);
    }
  });
}

testGroupBy();
