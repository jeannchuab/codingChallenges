//MergeSortedArrays

function mergeSortedArrays(array1, array2) {    
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];

    //Check input
    //If we only receive one array, return it
    if (array1.length == 0) {
        return array2
    }
    if (array2.length == 0) {
        return array1
    }

    let i = 1;
    let j = 1;
    while (array1Item || array2Item){        
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i]
            i++
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j]
            j++
        }
    }

    
    return mergedArray;
}


// let array1 = [0,3,4,31];
// let array2 = [4,6,30];

let array1 = [31];
let array2 = [30];

let result = mergeSortedArrays(array1, array2);
console.log(result);