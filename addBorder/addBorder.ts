function addBorder(picture: string[]): string[] {
    let row: string = '*'.repeat(picture[0].length + 2);
    return [row, ...picture.map(s => { 
        return '*'.concat(s, '*')
    }), row]
}

console.log(addBorder(["abc", "ded"]));