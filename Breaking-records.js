// Breaking the records
function breakingRecords(scores) {
  let minScore = scores[0];
  let maxScore = scores[0];
  let countMin = 0;
  let countMax = 0;

  for (let i = 1; i < scores.length; i++){
      if(scores[i] < minScore){
          minScore = scores[i];
          countMin ++;
      }else if(scores[i] > maxScore){
          maxScore = scores[i];
          countMax++;
      }
  }

  let result = [countMax, countMin];
  return result;
}