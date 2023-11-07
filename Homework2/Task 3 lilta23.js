function groupAnagrams(words) {
    const anagramGroups = {};

    for (const word of words) {

        const sortedWord = word.split('').sort().join('');


        if (!anagramGroups[sortedWord]) {
            anagramGroups[sortedWord] = [word];
        } else {

            anagramGroups[sortedWord].push(word);
        }
    }


    const result = Object.values(anagramGroups);

    return result;
}


const inputWords = ["tsar", "rat", "tar", "star", "tars", "cheese"];
const groupedAnagrams = groupAnagrams(inputWords);
console.log(groupedAnagrams);
