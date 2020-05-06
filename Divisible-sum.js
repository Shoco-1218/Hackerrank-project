// Divisible Sum Pairs
function divisibleSumPairs(n, k, ar) {
  let count = 0;

  for (let i = 0; i < ar.length -1; i++) {
      for(let j = i + 1; j < ar.length; j++) {
          let sum = ar[i] + ar[j];
          if (sum % k == 0) {
            count++;
          }
      }
  }

  return count;
}