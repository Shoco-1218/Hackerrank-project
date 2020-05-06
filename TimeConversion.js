'use strict';

{
/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let arrayS = s.split("");
    if(arrayS[8] === "A"){
      if(arrayS[0] === "1" && arrayS[1] === "2"){
          arrayS[0] = "0";
          arrayS[1] = "0";
          return arrayS.slice(0,8).join('');
      }
      return arrayS.slice(0,8).join('');
  }else if (arrayS[8] === "P"){
      if (arrayS[0] === "1" && arrayS[1] === "2"){
          return arrayS.slice(0,8).join('');
      }
      const number = parseInt(arrayS.slice(0,1)) +  1;
      const number2 = parseInt(arrayS.slice(1,2)) + 2;
      arrayS.splice(0, 1, number);
      arrayS.splice(1, 1, number2);
      return arrayS.slice(0,8).join('');
  }
}
}