function canConstruct(ransomNote: string, magazine: string): boolean {
  const hashMap = magazine.split('').reduce((acc: Map<string, number>, cur) => {
    acc.set(cur, (acc.get(cur) || 0) + 1);
    return acc;
  }, new Map<string, number>());

  for (const note of ransomNote.split('')) {
    if (hashMap.has(note)) {
      const count = hashMap.get(note);
      if (count && count > 0) {
        hashMap.set(note, count - 1);
        continue
      } else {
        return false
      }
    } else {
      return false
    }
  }

  return true
}

const testcases: [string, string, boolean][] = [
    ["a", "b", false],
    ["aa", "ab", false],
    ["aa", "aab", true],
    ["abc", "cba", true],
    ["", "anything", true],
    ["aabbcc", "abcabc", true],
    ["xyz", "xyzz", false],
    ["longransomnote", "longmagazinewithenoughletters", true],
    ["notenoughletters", "shortmagazine", false],
];
testcases.forEach(([ransomNote, magazine, expected]) => {
    const result = canConstruct(ransomNote, magazine);
    console.log(`canConstruct("${ransomNote}", "${magazine}") = ${result}; expected = ${expected}`);
});
