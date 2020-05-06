//Migratory birds 
function migratoryBirds(arr) {
    const countN = [0, 0, 0, 0, 0];

    for (let i = 0; i < arr.length; i++) {
        countN[arr[i] - 1]++;
    }

    let largeNum = countN[0];

    for (let i = 0; i < countN.length; i++) {
        if (countN[i] > largeNum) {
            largeNum = countN[i];
        }
    }

    const index = countN.findIndex(e => e === largeNum);

    let answer = index + 1;

    return answer;

}
