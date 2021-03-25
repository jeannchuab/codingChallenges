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

let array = [1, 2, 3, 4, 5];

let result = rotLeft(4, array);

console.log(result)