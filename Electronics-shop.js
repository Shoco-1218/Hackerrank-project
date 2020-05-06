// Electronics shop
function getMoneySpent(keyboards, drives, b) {
  let maxSum = 0;

  for (let i = 0; i < keyboards.length; i++) {
      for (let j = 0; j < drives.length; j++) {
          let sum = keyboards[i] + drives[j];
          if(sum <= b && sum > maxSum){
              maxSum = sum
          }
      }
  }

  if(maxSum == 0) {
      return -1;
  }else{
      return maxSum;
  }
}
