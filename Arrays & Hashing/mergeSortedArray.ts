function merge(nums1: number[], m: number, nums2: number[], n: number): any {
    for (let p1 = 0, p2 = m; p1 < n; p1++, p2++) {
      nums1[p2] = nums2[p1]
    }
    return nums1.sort((a,b) => a - b)
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)) // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)) // [1]