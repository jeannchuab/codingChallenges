/*
    https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
*/


function twoStrings(s1, s2) {

    let smallestStr = s1;
    let biggerStr = s2;

    if (s1.length > s2.length) {
        smallestStr = s2;
        biggerStr = s1;
    } 

    // for (let i = 0; i < smallestStr.length; i++) {
    //     if (biggerStr.indexOf(smallestStr[i]) > 0) {
    //         return "YES";
    //     }        
    // }

    
    for (letter of smallestStr){
        if (biggerStr.indexOf(letter) > -1) {
            return "YES";
        }
    }
    return "NO";
}

let s1 = "x";
let s2 = "apple";

let result = twoStrings(s1, s2);
console.log(result);