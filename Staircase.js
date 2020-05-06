'use strict';

{
  function staircase(n) {
    for (let i = 1; i <= n; i++) {
  
        let spaceShow = " ".repeat(n - i);
        let hashTag = "#".repeat(i);
        console.log(spaceShow + hashTag);
    }
  }
}
