function compose(...fns) {
  return (...args) => {
    return fns.reduceRight((acc, cur) => {
      return [cur(...acc)]
    }, args)[0]
  }
}

function testCompose() {
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;
  const subtract = (a, b) => a - b;

  const composedFunction = compose(
    (x) => multiply(x, 2),
    (x) => add(x, 3),
    (x) => subtract(x, 1)
  );

  const result = composedFunction(5); // ((5 - 1) + 3) * 2 = 14

  if (result !== 14) {
    throw new Error(`Ошибка: ожидался результат 14, но получен ${result}.`);
  } else {
    console.log('Тест пройден: результат равен 14');
  }
}

testCompose();
