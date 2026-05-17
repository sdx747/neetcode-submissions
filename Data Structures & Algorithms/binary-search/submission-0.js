class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let L=0
        let R=nums.length-1

        while (L<=R) {
            let mid = L + Math.floor((R-L)/2)
            const num = nums[mid]

            if (num === target) {
                return mid
            }
            
            if (target < num) {
                R = mid - 1
            } else {
                L = mid + 1
            }
        }

        return -1
    }
}
