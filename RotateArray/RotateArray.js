function arrayRotation (array) {    
    let arrayResult = [];
    for (let i = 1; i < array.length; i++) {        
        arrayResult.push(array[i]);
    }
    arrayResult[array.length - 1] = array[0];
    return arrayResult;
}

function rotLeft(count, array) {
    let arrayResult = array;
    for (let i = 0; i < count; i++) {        
        arrayResult = arrayRotation(arrayResult)
        // console.log("Log:" + arrayResult)
    }
    return printArray(arrayResult);
}

function printArray(array){    
    let result = "";    
    for (let i = 0; i < array.length; i++) {
        result = result == "" ? array[i] : result + " " + array[i]
    }    
    return result;
}

//Didn't pass the time test
function rotLeftNew(array, count){

    let i = 0;
    let result = array;

    while (i < count) {
        let firstItem = result[0];
        let cutArray = result.slice(1, result.length);
        // console.log(cutArray);
        cutArray.splice(result.length - 1, 0, firstItem);
        result = cutArray;
        i++;
    }
    return result
}

let array = [1, 2, 3, 4, 5];
// let result = rotLeft(1, array);
let result = rotLeftNew(array, count);
console.log(result.join(' ') + '\n');