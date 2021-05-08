/* 
    Given a string str made of alphabetical letters only, create a function that returns
    the length of the longest palindrome string that can be made from letters of str
*/


function longestPalindrome(text){
    let length = 0;
    let occurrences = new Array(128).fill(0);

    for (letter of text){
        occurrences[letter.charCodeAt(0)]++;
    }
    // console.log(occurrences);

    for (occur of occurrences){
        if (occur > 0) {
            // Common if
            // if (occur % 2 == 0) { //the item is even
            //     length = length + occur;
            // } else{
            //     length = length + (occur - 1);
            // }

            // Ternary if
            length += occur % 2 == 0 ? occur : occur - 1
        }
    }

    if (length < text.length) {
        length++;
    } 
    
    return length
}

function longestPalindromeOp2(text){

    let length = 0;
    let occurrences = new Map();

    for (letter of text){        
        let qtd = occurrences.get(letter)
        if (qtd > 0) {
            occurrences.set(letter, qtd + 1);
        } else {
            occurrences.set(letter, 1);
        }                
    }
    // console.log(occurrences);

    for ([key, value] of occurrences){

        // Common if
        // if (value % 2 == 0) { //the item is even
        //     length = length + value;
        // } else {
        //     length = length + (value - 1);
        // }
        // Ternary if
        
        length += value % 2 == 0 ? value : value - 1;
    }

    if (length < text.length) {
        length++;
    } 
    
    return length

}

// let text = "zaabbccdddde"; //must return 11
// let text = "zaabbccddddez"; //must return 13
// let text = "ZaZ"; //must return 3
// let text = "xxxbx"; //must return 5


let result = longestPalindromeOp2(text);
console.log(result);