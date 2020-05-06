'use strict'; 

{
  function kangaroo(x1, v1, x2, v2) {
    if (x1 > x2 && v1 >= v2) {
        return "NO";
    } else if (x2 > x1 && v2 >= v1) {
        return "NO";
    } else if (x1 == x2) {
        return v1 == v2 ? "YES" : "NO";
    } else {
        let kf = { x : x1, v : v1 };
        let kb = { x : x2, v : v2 };

        [kf, kb] = kf.x < kb.x ? [kb, kf] : [kf, kb];
        console.log([kf, kb]);

        while (kf.x > kb.x) {
            kb.x = kb.x + kb.v;
            kf.x = kf.x + kf.v;
        }
        return kb.x == kf.x ? "YES" : "NO";
    }
  }
}
