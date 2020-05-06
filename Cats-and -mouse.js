// Cats and a mouse
function catAndMouse(x, y, z) {
  let disA = Math.abs(z - x);
  let disB = Math.abs(z - y);
  if (disA < disB) {
      return "Cat A";
  } else if (disB < disA) {
      return "Cat B";
  } else {
      return "Mouse C";
  }
}