function callLimit2(fn, limit, callback) {
  let counter = 0;

  const func = (...args) => {
    if (limit === counter) return

    counter++

    if (limit === counter) {
      if (callback) setTimeout(() => callback(), 0)
      return fn(...args)
    }

    return fn(...args)
  }

  func.reset = () => {
    counter = 0
  }

  return func
}

function testCallLimit2() {
  let callCount = 0;
  const mockFunction = () => {
    callCount++;
    console.log(callCount);
  };
  const callback = () => {
    console.log('Callback вызван после достижения лимита вызовов.');
  };
  const limitedFunction = callLimit2(mockFunction, 3, callback);

  limitedFunction();
  limitedFunction();
  limitedFunction(); // Этот вызов должен вызвать callback

  if (callCount !== 3) {
    throw new Error(`Ожидалось, что mockFunction будет вызван 3 раза, но он был вызван ${callCount} раз.`);
  } else {
    console.log('Все хорошо');
  }
}

testCallLimit2();
