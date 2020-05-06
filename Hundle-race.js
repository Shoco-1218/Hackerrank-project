// Hurdle Race
function hurdleRace(k, height) {
  let maxHeight = Math.max(...height);
  let gap = maxHeight - k;

  return gap < 0 ? "0" : gap;
}