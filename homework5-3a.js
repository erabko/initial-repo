function splitIntoIntegers(number, pieces) {
    const result = [];
    let sumOfPieces = 0;
    for (let i = 0; i < pieces; i++) {
        if (i === pieces - 1) {
            result.push(number - sumOfPieces);
            break;
        }
        let piece = Math.round(Math.random() * (number - sumOfPieces));
        result.push(piece);
        sumOfPieces += piece;
    }
    return result;
}
console.log(splitIntoIntegers(15, 3));