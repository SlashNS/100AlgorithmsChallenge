function arrayConversion(inputArray: number[]): number {
    let iterations = Math.floor(inputArray.length / 2);
    let result = [...inputArray];
    for (let i = 1; i < iterations; i++ ) { 
        let currentArray = [];
        for (let j = 0; j < result.length;  j += 2) {
            if (i % 2 === 1) { 
                currentArray.push(result[j] + result[j + 1]);
            } else { 
                currentArray.push(result[j] * result[j + 1]);
            }
        }
        result = currentArray;
    }

    return result[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
