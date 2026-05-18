class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = []

        for (let i=0; i<temperatures.length; i++) {
            let count=0
            for (let j=i; j<temperatures.length; j++) {
                if (temperatures[j] > temperatures[i]) {
                    count = j-i
                    break
                }
            }
            res.push(count)
        }

        return res
    }
}
