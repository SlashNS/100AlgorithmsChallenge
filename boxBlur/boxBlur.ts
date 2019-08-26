function boxBlur(image: number[][]): number[][] {
    let output = []; 
    let x = 0;
    for(let i = 1; i < image[0].length - 1; i++) { 
        output.push([]);
        for(let j = 1; j < image.length - 1; j++) { 
            const avg = (image[i-1][j] + image[i-1][j-1] + image[i][j-1] + image[i+1][j+1] + image[i+1][j] + image[i+1][j+1] + image[i][j+1] + image[i-1][j+1]) / 8;
            output[x].push(Math.floor(avg));
        }
        x++;
    }
    return output;
}

console.log(boxBlur([[8, 8, 2], 
    [2, 7, 2], 
    [2, 2, 20]]));