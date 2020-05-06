// Bon Appetit
function check(bill, k) {
  bill.splice(k, 1);

  let sum = 0;
  for (let i = 0; i < bill.length; i++) {
      sum = sum + bill[i];
  }

  return sum / 2;
}
function bonAppetit(bill, k, b) {

  let collectPay = check(bill, k);

  let gap = Math.abs(collectPay - b);

  b == collectPay ? 
    console.log("Bon Appetit") : console.log(gap);
}
