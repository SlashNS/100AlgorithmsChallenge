function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxSum = inputArray[0] + inputArray[1];

    for(let i = 1; i < inputArray.length - 1; i++) { 
        if (inputArray[i] + inputArray[i + 1] > maxSum) {
            maxSum = inputArray[i] + inputArray[i + 1];
        }
    }

    return maxSum;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 3, 5, 1, 6]));