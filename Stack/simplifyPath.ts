function simplifyPath(path: string): string {
  const stack: any = []
    
  const splittedStr = path.split('/')
  for (let i = 0; i < splittedStr.length; i++) {
    const char = splittedStr[i]

    if (!char || char === '.') continue

    if (char === '..') {
      stack.length && stack.pop()
      continue
    }

    stack.push(char)
  }

  return '/' + stack.join('/')
};

console.log(simplifyPath("/home/")) // "/home"
console.log(simplifyPath("/../")) // "/"
console.log(simplifyPath("/home//foo/")) // "/home/foo"
console.log(simplifyPath("/a/./b/../../c/")) // "/c"
console.log(simplifyPath("/a/../../b/../c//.//")) // "/c"
console.log(simplifyPath("/a//b////c/d//././/..")) // "/a/b/c"
