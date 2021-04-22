//ReverseString
//Create a function that reverses a string

function reverseString(str) {
    //check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Invalid string to reverse.'
    }

    const backwards = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--){
        backwards.push(str[i]);
    }
    console.log(backwards);

    // return backwards.toString //option 1
    return backwards.join('') //option 2: join all the items in array
}

function reverseString2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');

let text = 'Jeann Luiz';
// let result = reverseString(text)
// let result = reverseString2(text)
// let result = reverse3(text)
let result = reverse4(text)

console.log(result);