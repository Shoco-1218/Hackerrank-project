// Picking numbers
function pickingNumbers(a) {
  let sortedA = a.sort((a, b) => (
      a - b
  ));
  
  let countUp = 1;
  let length = [];

  for (let i = 0; i < sortedA.length - 1; i++) {
      for (let j = i + 1; j < sortedA.length; j++) {
          if (Math.abs(sortedA[i] - sortedA[j]) <= 1) {
              countUp++;
          }
          if(j == sortedA.length - 1) {
              length.push(countUp);
              countUp = 1;
          }
      }
  }

  return Math.max(...length);
}