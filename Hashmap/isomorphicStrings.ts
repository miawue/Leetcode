function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  
  const sMap = new Map<string, number>()
  const tMap = new Map<string, number>()

  for (let i = 0; i < s.length; i++) {

    if (sMap.get(s[i]) !== tMap.get(t[i])) {
      return false
    }

    sMap.set(s[i], i)
    tMap.set(t[i], i)
  }

  return true
};

const testcases1: [string, string, boolean][] = [
    ["egg", "add", true],
    ["foo", "bar", false],
    ["paper", "title", true],
    ["badc", "baba", false],
    ["", "", true],
    ["a", "a", true],
    ["ab", "aa", false],
];

testcases1.forEach(([s, t, expected]) => {
    const result = isIsomorphic(s, t);
    console.log(`isIsomorphic("${s}", "${t}") = ${result}; expected = ${expected}`);
});
