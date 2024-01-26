function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}

const summation = num => (num * (num + 1)) / 2

console.log(summation(8))