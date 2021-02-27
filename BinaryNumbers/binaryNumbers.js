'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n = parseInt(readLine(), 10);
    const binary = dec2bin(n);
    const array = Array.from(binary);    
    console.log("Array = " + array);
    var oneConsecutives = 0
    
    for (var i = 0; i < array.length; i++) {       
       if (array[i] === "1") {
           oneConsecutives++;
       } else {
           oneConsecutives = 0;
       }
    }
        
    console.log(oneConsecutives);                 
}

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
