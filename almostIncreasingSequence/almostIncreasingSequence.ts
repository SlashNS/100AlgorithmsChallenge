function almostIncreasingSequence(sequence: number[]): boolean {
    let found = false; 
    for(let i  = 1; i < sequence.length; i++) { 
        if (sequence[i] < sequence[i-1]) { 
            if (found) return false;
            else found = true;
        }
    }

    return true;
}

console.log(almostIncreasingSequence([1, 2, 3, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 