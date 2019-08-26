function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let yourArms = yourLeft > yourRight ? [yourLeft, yourRight] : [yourRight, yourLeft];
    let friendsArms = friendsLeft > friendsRight ? [friendsLeft, friendsRight] : [friendsRight, friendsLeft];

    return yourArms[0] === friendsArms[0] && yourArms[1] === friendsArms[1];
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
