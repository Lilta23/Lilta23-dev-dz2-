function  FindEvenIndex(arr) {
    let i = 0;
    for ( let i; i < arr.length; i ++  );

    let LeftSum = arr.slice(0, i);
    let LeftSum = LeftSum.reduce((accumulator, currenrValue) => accumulator + currentValue, 0);

    let RightSum = arr.slice(i + 1 );
    let RightSum = RightSum.reduce((accumulator, currenrValue) => accumulator + currentValue, 0);

    if (LeftSum === RightSum){
        return i;
    }
    if (LeftSum != RightSum) {
        return -1;
    }

}
const array1 = [1, 2, 3, 4, 3, 2, 1];
const array2 = [1, 100, 50, -51, 1, 1];
const array3 = [20, 10, -80, 10, 10, 15, 35];

console.log(FindEvenIndex(array1));
console.log(FindEvenIndex(array2));
console.log(FindEvenIndex(array3));