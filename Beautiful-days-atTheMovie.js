// Beautiful days at the movie
function beautifulDays(i, j, k) {
  // i = starting day, j = last day, k = divisor
  let howMany = j - i + 1;

  let countUp = 0;

  for (let x = 0; x < howMany; x++) {
      let day = i + x;
      let splitNum = ((i + x) + "").split("");
      let reversed = splitNum.reverse();
      let joined = reversed.join("");

      let gap = Math.abs(day - joined);
      
      if(gap % k == 0) {
          countUp++
      }
  }

  return countUp;
}