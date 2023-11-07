function cube (m) {
    let n = 1; // n - 3 n - 2 n - 1 n
    let sum = 1; // 1^3 2^3 3^3 4^3
    while (sum < m) {
        n++;
        sum += Math.pow(n,3)
    }
    return sum == m ?n : -1;
}
console.log(cube(1071225));
console.log(cube(91716553919377));