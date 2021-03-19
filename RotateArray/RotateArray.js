function arrayRotation (array) {
    
    let arrayResult = [];

    for (let i = 1; i < array.length; i++) {        
        arrayResult.push(array[i]);
    }

    arrayResult[array.length - 1] = array[0];
    return arrayResult;
}

function multipleRotation(count, array) {

    let arrayResult = array;

    for (let i = 0; i < count; i++) {        
        arrayResult = arrayRotation(arrayResult)
        // console.log("Log:" + arrayRotation(arrayResult))
    }

    return arrayResult;
}

let array = [1, 2, 3, 4, 5];
console.log(multipleRotation(5, array));