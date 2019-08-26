function allLongestStrings(inputArray: string[]): string[] {
    let maxLength = inputArray.reduce((max, input) => input.length > max ? input.length : max, 0);
    return inputArray.filter(input => input.length === maxLength);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));