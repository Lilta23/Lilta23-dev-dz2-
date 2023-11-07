function unpackingSausages(truck) {
    let displayCounter = '';
    let undCount = 0;
    for (let  box of truck) {
        for (let package of box) {

            if (package.startsWith(("[") && package.endsWith("]") && package.length % 4 === 0)) {
                undCount++;



                if (undCount % 5!==0) {
                    displayCounter +=package.slise(1, -1) + "";



                }
            }

        }
    }
      return displayCounter.trim()
}
const truck = [
    ["(-)", "[IIII]", "[))))]"],
    ["IuI", "[llll]"],
    ["[@@@@]", "UwU", "[IlII]"],
    ["IuI", "[))))]", "x"],
    []
];
const result = unpackingSausages(truck);

console.log(result);