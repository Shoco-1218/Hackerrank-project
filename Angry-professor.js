// Angry professor
function angryProfessor(k, a) {

  // k = ppl, a = array of time
  let onTime = a.filter( e => 
      e <= 0
  );
  
  return onTime.length < k ? "YES" : "NO";
}
