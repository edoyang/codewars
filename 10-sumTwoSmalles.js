const sumTwoSmallestNumbers = (numbers) => {
    let sum = 0;
    let sorted = numbers.sort((a, b) => a - b);
    sum = sorted[0] + sorted[1];
    return sum;
}
    console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))