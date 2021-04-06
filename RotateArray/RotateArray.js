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

//Didn't pass the time test
function rotLeft2(array, count){

    let i = 0;
    let arrayOrigin = [...array];
    let result = [...array];
    let arrayLen = arrayOrigin.length;

    while (i < count) {        
        for (let j = 0; j < arrayLen; j++) {
            if (j == 0) {
                result[arrayLen - 1] = arrayOrigin[0];
            } else if (j > 0){
                result[j - 1] = arrayOrigin[j];
            }
        }    
        i++;
        // console.log(result);
        arrayOrigin = [...result]; //Copy the value of result, not reference.
    }

    return result
}

function rotLeft3(array, count){
    let i = 0;    
    let result = [...array];    

    while (i < count) {
        result.push(result[0]);
        result.shift();
        i++;
    }

    return result
}


let array = [1, 2, 3, 4, 5];
// let array = [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97];

// let array = [5, 1, 2, 3, 4];
// let result = rotLeft(1, array);
// let result = rotLeftNew(array, count);
// let result = rotLeft2(array, 4);
let result = rotLeft3(array, 5);
console.log(result.join(' ') + '\n');