function convertString(s: string, t: string): boolean {
    let i = 0, j = 0; 

    while (i < s.length && j < t.length) { 
        if (s[i] === t[j]) j++;
        i++;
    }

    return j === t.length;
}

console.log(convertString('ceoydefthf5iyg5h5ytsx', 'codefights'));
console.log(convertString('addbyca', 'abcd'));

