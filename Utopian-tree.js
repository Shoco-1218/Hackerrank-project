// Utopian tree
function utopianTree(n) {
  let height = 1;

  if( n == 0 ) {
      return height;
  }

  for (let i  = 0; i <= n; i++) {
      if (i ==  0) {
          height = height;
      }else if(i % 2 == 0) {
          height++;
      }else{
          height = height * 2;
      }
  }

  return height;
}