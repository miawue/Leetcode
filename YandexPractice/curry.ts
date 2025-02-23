function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args)
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs)
    }
  }
}

function testCurry() {
  const add = (a, b, c) => a + b + c;
  const curriedAdd = curry(add);

  console.log(curriedAdd(1)(2)(3)); // Ожидается 6
  console.log(curriedAdd(1, 2)(3)); // Ожидается 6
  console.log(curriedAdd(1, 2, 3)); // Ожидается 6
  console.log(curriedAdd(1)(2, 3)); // Ожидается 6

  try {
    console.log(curriedAdd(1)()); // Ожидается ошибка, так как недостаточно аргументов
  } catch (error) {
    console.error('Ошибка: недостаточно аргументов'); // Ожидается вывод ошибки
  }
}

testCurry();
