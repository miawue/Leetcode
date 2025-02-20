function isLetter(char: string): boolean {
    const code = char.charCodeAt(0);
    return (code >= 97 && code <= 122) ||
           (code >= 48 && code <= 57);
}

function isPalindrome(s: string): boolean {
  let leftPointer = 0
  let rightPointer = s.length - 1

  while (leftPointer <= rightPointer) {
    const leftChar = s[leftPointer].toLowerCase()
    const rightChar = s[rightPointer].toLowerCase()

    if (!isLetter(leftChar)) {
      leftPointer++
      continue;
    }

    if (!isLetter(rightChar)) {
      rightPointer--;
      continue;
    }

    if (leftChar !== rightChar) return false

    leftPointer++
    rightPointer--
  }

  return true
};

// Тесткейсы
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
console.log(isPalindrome(".,"));  // true
console.log(isPalindrome("0P")); // false
console.log(isPalindrome("ab_a")); // true
