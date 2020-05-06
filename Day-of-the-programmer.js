// Day of the programmer

const twelve = "12.09.";
const thirteen = "13.09.";

function gregoYear(year){
  if((year % 4 ==0 && !(year % 100 == 0)) || year % 400 == 0){
      let leapYear = twelve + year
      let final = leapYear;
      return final;
  }else{
      let notLeapYear = thirteen + year;
      let final = notLeapYear;
      return final;
  }
}
function juliaYear(year){
  if(year % 4 ==0){
      let leapYear = twelve + year
      let final = leapYear
      return final; 
  }else{
      let notLeapYear = thirteen + year;
      let final = notLeapYear;
      return final;
  }
}
function dayOfProgrammer(year) {
  if(year == "1918"){
      let final = "26.09.1918"
      return final
  }if(year >= 1919){
      return gregoYear(year)
  }else{
      return juliaYear(year)
  }
}
