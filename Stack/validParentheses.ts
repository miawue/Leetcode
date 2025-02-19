function isValid(s: string): boolean {
    const bracketsMap = {
      ')': '(',
      ']': '[',
      '}': '{',
    }
    const stack: any = []

    for (let i = 0; i < s.length; i++) {
      const currentBracket = s[i]

      if (['(', '[', '{'].includes(currentBracket)) {
        stack.push(currentBracket)
        continue
      }

      if (stack.pop() !== bracketsMap[currentBracket]) return false
    }
    
    return stack.length === 0
};

console.log(isValid("()")) // true
console.log(isValid("()[]{}")) // true 
console.log(isValid("(]")) // false
console.log(isValid("([)]")) // false
console.log(isValid("{[]}")) // true
console.log(isValid("]")) // false
