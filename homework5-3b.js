function splitDecimals(number, pieces) {
    const result = [];
    let sumOfPieces = 0;
    for (let i = 0; i < pieces; i++) {
        if (i === pieces - 1) {
            result.push(+(number - sumOfPieces).toFixed(2));
            break;
        }
        let piece =+ (Math.random() * (number - sumOfPieces)).toFixed(2);
        result.push(piece);
        sumOfPieces += piece;
    }
    return result;
}
console.log(splitDecimals(15, 3));