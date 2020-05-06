'use strict';

{
  function diagonalDifference(arr) {
    // Write your code here
    
    var sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i][i];
    }

    var sum2 = 0;
    var n = arr.length - 1;
    for (let i = 0; i < arr.length; i++){
        sum2 += arr[i][n];
        n = n - 1;
    }
    const result = Math.abs(sum - sum2);
    return result;
  }
}