function alternatingSums(a: number[]): number[] {
    let team1 = a.reduce((weight, n, i) => i % 2 === 0 ? weight + n : weight, 0);
    let team2 = a.reduce((weight, n, i) => i % 2 === 1 ? weight + n : weight, 0);

    return [team1, team2];

}

console.log(alternatingSums([50, 60, 60, 45, 70]))
console.log(alternatingSums([50, 60, 60, 45]))