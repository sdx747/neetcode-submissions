class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string) {
        let L=0
        let R=s.length-1

        while (L<=R) {
            if (!isAlphaNum(s.charCodeAt(L))) {
                L++
                continue
            }
            if (!isAlphaNum(s.charCodeAt(R))) {
                R--
                continue
            }

            if (s[L].toLowerCase() !== s[R].toLowerCase()) {
                return false
            }

            L++
            R--
        }

        return true

        function isAlphaNum (code) {
            if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                return true
            }

            return false
        }
    }
}
