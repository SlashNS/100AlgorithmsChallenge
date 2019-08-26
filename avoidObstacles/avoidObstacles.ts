function avoidObstacles(inputArray: number[]): number {
    inputArray = inputArray.sort();
    let max = inputArray[inputArray.length - 1];

    for(let i = 2; i < max; i++) { 
        if (inputArray.every((element) => element % i !== 0)) { 
            return i; 
        }
    }

    return max + 1;
}

console.log(avoidObstacles([5, 3, 4, 6, 7, 9]));