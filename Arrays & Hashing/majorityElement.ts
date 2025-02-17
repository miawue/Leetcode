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

// Яндекс залупа

//@ts-ignore
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, item) => {
    const key = fn(item)
    acc[key] = acc[key] || []
    acc[key].push(item) 
    return acc
  }, {})
}

const asyncAuth = (p0: (error: any, data: any) => void) => {
}

function auth() {
  return new Promise((resolve, reject) => {
    asyncAuth((error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}

function tryAuth(n) {
  return new Promise((resolve, reject) => {
    const attemp = (remainingAttemps) => {
      auth()
      .then(resolve)
      .catch((error) => {
        if (remainingAttemps > 1) {
          attemp(remainingAttemps - 1)
        } else {
          reject(error)
        }
      })
    }

    attemp(n);
  })
}