function descendingOrder(n) {
    let numbers = String(n).split('');
    let sortedNumbers = numbers.sort((a,b) => b- a);
    let result = Number(sortedNumbers.join(''));
    return result;
}
console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));