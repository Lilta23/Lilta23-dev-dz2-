function MaxLeadersHonor(arr , d ) {
    let MaxHonor = -Infinity;


    let i = 0;
    let a = 0;

    for (let i = 0; i < arr.length; i++) {
        let CurrentSum = 0;
        for (let a = 0; a < arr.length; a++) {

            CurrentSum = arr[(i + a) % arr.length];
        }
       MaxHonor = Math.max(MaxHonor, CurrentSum );
    }
    return MaxHonor;
}
console.log(MaxLeadersHonor([1, 2, 3, 4], 2));
console.log(MaxLeadersHonor([1, 5, 6, 3, 4, 2], 3));
console.log(MaxLeadersHonor([1, 1, 0], 1));





