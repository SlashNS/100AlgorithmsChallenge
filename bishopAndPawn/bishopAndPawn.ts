function bishopAndPawn(bishop: string, pawn: string): boolean {
    const bCords = [bishop.charCodeAt(0) - 96, parseInt(bishop[1])]
    const pCords = [pawn.charCodeAt(0) - 96, parseInt(pawn[1])]
    const gradient = (bCords[0] - pCords[0]) / (bCords[1] - pCords[1]);
    return gradient === 1 || gradient === -1;
}

console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('d3', 'c1'));
