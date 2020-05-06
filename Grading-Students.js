'use strict';

{
  function gradingStudents(grades) {
    // Write your code here
    const array = [];
    for(let i = 0; i < grades.length; i++){
        if(grades[i] === 100){
            array.push(grades[i]);
            }else if(grades[i] <38){
                array.push(grades[i]);
            }else{
              const rounderNum = rounder(grades[i]);
              array.push(rounderNum);
            }
    }

    return array;

    function rounder(x){
    return x % 5 > 2 ? Math.floor(x/5) * 5 + 5 : x; 
    }

}
}