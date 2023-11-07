// Minimum Moves = 2^N - 1
function hanoiMoves(n) {
    if (n <= 0) {
        return 0;
    } else {
        return Math.pow(2 , n) - 1;
    }

}
const numbern = 3;
const allmoves = hanoiMoves(numbern)
console.log(`Answer ${hanoiMoves(numbern)}`)


