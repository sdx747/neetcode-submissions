class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const brackets = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }

        const stack = []

        for (const x of s) {
            if ([")", "}", "]"].includes(x)) {
                const last = stack.pop()
                if (!last || last !== brackets[x]) return false
            } else {
                stack.push(x)
            }
        }

        return stack.length === 0
    }
}
