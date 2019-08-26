function areSimilar(a: number[], b: number[]): boolean {
   let iA = [], iB = []; 
   for(let i = 0; i < a.length; i++) { 
        if (a[i] != b[i]) { 
            iA.push(a[i]);
            iB.push(b[i]);
            if (iA.length > 2) return false; 
        }
   }

   if (iA.length === 0) return true; 

   return iA[0] === iB[1] && iA[1] === iB[0];
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
