function evalRPN(tokens: string[]): number {
  const stack: any = []
  const validOperants = ['+', '-', '*', '/']

  for (let i = 0; i < tokens.length; i++) {
    const currentChar = tokens[i]

    if (!validOperants.includes(currentChar)) {
      stack.push(Number(currentChar))
      continue
    }

    const poppedFirst = stack.pop()
    const poppedSecond = stack.pop()

    if (currentChar === '+') {
      stack.push(poppedFirst + poppedSecond)
    }

    if (currentChar === '*') {
      stack.push(poppedFirst * poppedSecond)
    }

    if (currentChar === '/') {
      stack.push(Math.trunc(poppedSecond / poppedFirst))
    }

    if (currentChar === '-') {
      stack.push(poppedSecond - poppedFirst)
    }
  }

  return stack[0]
};

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22
console.log(evalRPN(["3", "4", "+"])); // 7
console.log(evalRPN(["3", "4", "-"])); // -1



