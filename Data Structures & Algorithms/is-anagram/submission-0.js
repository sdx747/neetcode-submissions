class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const map = new Map()

        for (const a of s) {
            map.set(a, (map.get(a) ?? 0) + 1)
        }

        for (const b of t) {
            const val = map.get(b)

            if (val === undefined) return false

            if (val === 1) {
                map.delete(b)
            } else {
                map.set(b, val-1)
            }
        }

        return map.size === 0
    }
}
