'use strict';

{
  function miniMaxSum(arr) {

    arr.sort((a,b) => a - b)
    let maxSum = 0;
    let minSum = 0;
  
    function max(){
        for (let i = 1; i < arr.length; i++){
            maxSum += arr[i];
        }
        return maxSum;
    }
  
    function min(){
        for (let i = 0; i < (arr.length - 1); i++){
            minSum += arr[i];
        }
        return minSum;
    }
    
    console.log(min() + " " + max());
  }
  
}