function findUnsortedSubarray(nums: number[]): number {
    const len = nums.length;
    const sorted = [...nums].sort((a, b) => a - b);
    let [fIdx, bIdx] = [0, len - 1];
    
    for (; fIdx < len; fIdx++) if (nums[fIdx] !== sorted[fIdx]) break;
    if (fIdx === len) return 0; // nums is already sorted
    
    for (; bIdx >= 0; bIdx--) if (nums[bIdx] !== sorted[bIdx]) break;
    
    return bIdx - fIdx + 1;
};