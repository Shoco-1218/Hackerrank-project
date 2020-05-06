'use strict'
{
  // Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  let tallest = 0;
  let count= 0;
  for (let i = 0; i < ar.length; i++){
      if (ar[i] > tallest){
          tallest = ar[i];
      }
  }
  for(let j = 0; j < ar.length; j++){
      if(ar[j] == tallest){
          count++
      }
  }
  return count;
}

}