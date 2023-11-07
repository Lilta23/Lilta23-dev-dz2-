function highAndLow(numbers) {
    const a = numbers.split(' ').map(Number);
    const max = Math.max(...a);
    const min = Math.min(...a);

    const result = `${max} ${min}`;

    return result;
}
console.log(highAndLow("2 -2 1 7 6"));