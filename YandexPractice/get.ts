function get(url, retries = 5) {
  return fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error()
    }
  })
  .then(res => res)
  .catch((err) => {
    if (retries > 0) {
      return get(url, retries - 1)
    } else {
      throw new Error('Заданный URL недоступен')
    }
  })
}