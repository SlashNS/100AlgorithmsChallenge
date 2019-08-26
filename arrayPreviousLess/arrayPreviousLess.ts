function arrayPreviousLess(items: number[]): number[] {
    return items.map((el, idx) => { 
        for(let j = idx; j >= 0; j--) { 
            if (items[j] < el) return items[j];
        }
        return -1;
    }
  );
}

console.log(arrayPreviousLess([3, 5, 4, 4, 5]));