function isCaseInsensitivePalindrome(inputString: string): boolean {
    const input = inputString.toLowerCase();
    let i = 0, j = inputString.length - 1;

    while(i < j) { 
        if (input[i] !== input[j]) return false;
    }

    return true; 
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));