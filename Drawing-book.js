// Drawing book
function pageCount(n, p) {
  if (p % 2 == 0) {
      p = p + 1;
  }
  if (p == 1 || n == p) {
      return 0;
  };
  let fromFront = Math.round((p - 1) / 2);
  let fromBack = Math.round((n - p) / 2);

  if (fromFront < fromBack) {
      return fromFront;
  } else {
      return fromBack;
  }
}