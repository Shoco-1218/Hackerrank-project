// Counting Valleys
function countingValleys(n, s) {
  let ground = 0;
  let valley = 0;

  for (let i = 0; i < s.length; i++) {
    if(ground == 0 && s[i] == "D") {
        valley++;
    }

    if(s[i] == "U") {
        ground++;
    }else if(s[i] == "D") {
        ground--;
    }
  }

  return valley;

}