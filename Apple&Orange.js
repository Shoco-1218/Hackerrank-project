'use struct';

{
  function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    let getApple = 0;
    let getOrange = 0;

    for (let i = 0; i < apples.length; i++){
        let calc = a + apples[i];
        if(calc >= s && calc <= t){
            getApple++;
        }
    }
    for (let i = 0; i < oranges.length; i++){
        let calc = b + oranges[i];
        if(calc >= s && calc <= t){
            getOrange++;
        }
    }

    console.log(getApple);
    console.log(getOrange);
  }

}