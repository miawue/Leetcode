function timeLimited(fn, t = 1000) {
  return (...args) => new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject('Time limit exeed')
    }, t)

    return fn(...args)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
      .finally(() => clearTimeout(timer))
  })
}

function testTimeLimited() {
  const mockFunction = () => new Promise((resolve) => {
    setTimeout(() => resolve('Success'), 500);
  });

  const limitedFunction = timeLimited(mockFunction, 1000);

  limitedFunction()
    .then((result) => {
      console.log(result); // Ожидается 'Success'
    })
    .catch((error) => {
      console.error(error);
    });

  const failingFunction = () => new Promise((_, reject) => {
    setTimeout(() => reject('Error'), 1500);
  });

  const limitedFailingFunction = timeLimited(failingFunction, 1000);

  limitedFailingFunction()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error); // Ожидается 'Time limit exeed'
    });
}

testTimeLimited();
