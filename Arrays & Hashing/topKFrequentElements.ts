function topKFrequent(nums: number[], k: number): number[] {
  const freq: { [key: number]: number } = {};
  for (const n of nums) freq[n] = (freq[n] || 0) + 1
  return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map(v => Number(v[0]));
};

console.log(topKFrequent([3, 2, 2, 1, 1, 1], 2))