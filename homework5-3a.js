function splitIntoIntegers(number, numberOfPieces) {
    const resultArrayA = [];
    let sumOfPieces = 0;
    for (let i = 0; i < numberOfPieces; i++) {
        if (i === numberOfPieces - 1) {
            resultArrayA.push(number - sumOfPieces);
            break;
        }
        let piece = Math.round(Math.random() * (number - sumOfPieces));
        resultArrayA.push(piece);
        sumOfPieces += piece;
    }
    return resultArrayA;
}
console.log(splitIntoIntegers(15, 3));