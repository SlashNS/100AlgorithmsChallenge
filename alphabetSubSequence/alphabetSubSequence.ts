function alphabetSubsequence(s: string): boolean {
    return Array.from(s).reduce((isSubsequence, c, i) =>  (c <= s[i-1] || !isSubsequence) ? false : true, true);
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
