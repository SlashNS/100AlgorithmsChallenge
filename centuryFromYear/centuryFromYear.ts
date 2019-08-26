function centuryFromYear(year: number): number {
    const century = Math.floor(year / 100);
    return year % 100 == 0 ? century : century + 1;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));