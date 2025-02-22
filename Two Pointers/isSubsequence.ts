function isSubsequence(s: string, t: string): boolean {
    let i = 0
    let j = 0

    while (i < s.length) {
      const sChar = s[i]
      const tChar = t[j]

      if (sChar === tChar) {
        i++
        j++
        continue
      }

      j++
      if (j > t.length) return false
    }
    return true
};

// Тесткейсы
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("", "ahbgdc")); // true
console.log(isSubsequence("abc", "")); // false
console.log(isSubsequence("acb", "ahbgdc")); // false
