function plusMinus(arr) {
  const countPositive = arr.filter(x => x > 0).length;
  const countNegative = arr.filter(x => x < 0).length;
  const countZero = arr.filter(x => x === 0).length;

  let length = arr.length;

  let ratioPositive = (countPositive / length).toFixed(6);
  let ratioNegative = (countNegative / length).toFixed(6);
  let ratioZero = (countZero / length).toFixed(6);

  console.log(ratioPositive);
  console.log(ratioNegative);
  console.log(ratioZero);
}