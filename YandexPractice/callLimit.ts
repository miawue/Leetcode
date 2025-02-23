function callLimit(fn, limit) {
  let counter = 0;

  return (...args) => {
    if (counter >= limit) return

    counter++
    fn(...args)
  }
}

function testCallLimit() {
  let callCount = 0;
  const mockFunction = () => {
    callCount++;
    console.log(callCount)
  };
  const limitedFunction = callLimit(mockFunction, 3);

  limitedFunction();
  limitedFunction();
  limitedFunction(); // Этот вызов не должен выполнять mockFunction

  if (callCount !== 3) {
    throw new Error(`Ожидалось, что mockFunction будет вызван 2 раза, но он был вызван ${callCount} раз.`);
  } else {
    console.log('Everything good')
  }
}

testCallLimit();

