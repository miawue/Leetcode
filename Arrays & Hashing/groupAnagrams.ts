function groupAnagrams(strs: string[]): string[][] {
    const hash = new Map<string, string[]>()
    for (let i = 0; i < strs.length; i++) {
      const sorted = strs[i].split('').sort().join('')
      if (hash.has(sorted)) {
        hash.set(sorted, [...(hash.get(sorted) || []), strs[i]])
      } else {
        hash.set(sorted, [strs[i]])
      }
    }
    return Array.from(hash.values())
  }

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
// [["bat"],["nat","tan"],["ate","eat","tea"]]