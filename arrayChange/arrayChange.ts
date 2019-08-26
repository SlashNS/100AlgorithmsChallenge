function arrayChange(inputArray: number[]): number {
    let moves = 0; 
    let prev = inputArray[0];

    for(let i = 1; i < inputArray.length; i++) { 
        if (inputArray[i] <= prev) { 
            moves += prev - inputArray[i] + 1;
            inputArray[i] = prev + 1;
        }

        prev = inputArray[i];
    }

    return moves;
}

console.log(arrayChange([1, 0, 1]));