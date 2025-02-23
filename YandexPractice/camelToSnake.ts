function camelToSnake(string): string {
  let result = ''
  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      if (i === 0) result += char.toLowerCase()
      else result += '-' + char.toLowerCase()
    } else {
      result += char
    }
  }

  return result
}

function testCamelToSnake() {
  const testCases = [
    { input: 'camelCase', expected: 'camel-case' },
    { input: 'PascalCase', expected: 'pascal-case' },
    { input: 'snake_case', expected: 'snake_case' },
    { input: 'already-snake-case', expected: 'already-snake-case' },
    { input: 'mixedUPCase', expected: 'mixed-u-p-case' },
  ];

  testCases.forEach(({ input, expected }) => {
    const result = camelToSnake(input);
    if (result !== expected) {
      throw new Error(`Ошибка: для входа "${input}" ожидался "${expected}", но получен "${result}".`);
    } else {
      console.log(`Тест пройден для "${input}": "${result}"`);
    }
  });
}

testCamelToSnake();
