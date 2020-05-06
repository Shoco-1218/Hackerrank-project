// Airal advertising
function viralAdvertising(n) {
  let share = Math.floor(5 / 2);
  let liked = 2;
  
  for (let i = 1; i < n; i++) {
      share = Math.floor((share * 3) / 2);
      liked = liked + share;
  }

  return liked;
}
