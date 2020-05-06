// Birthday chocolate
function birthday(s, d, m) {
  // s = array of numbers, d = number to make, m = number of pairs to combine
  let sliceNum;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
      sliceNum = m + i;
      let compareNum = s.slice(i, sliceNum);
      let sum = compareNum.reduce(function(a , b) {
          return a + b;
      });
      if(sum == d){
          count++;
      }
  }

  return count;
}