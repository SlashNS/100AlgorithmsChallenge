function adjacentElementsProduct(inputArray: number[]): number {
    let max : number = inputArray[0] * inputArray[1];
    for(let i = 2; i < inputArray.length - 1; i++) { 
        let m = inputArray[i] * inputArray[i+1];
        if (max < m) max = m;
    }

    return max
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([3, 1, 2]));