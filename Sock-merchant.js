// Sock Merchant
function sockMerchant(n, ar) {

  let newAr = ar.sort((a,b) => (a-b));
  let countUp = 0;

  for (let i = 0; i < newAr.length; i++){
    if(newAr[i] == newAr[i + 1]){
        countUp++;
        i++;
    }
  }

  return countUp;
}



