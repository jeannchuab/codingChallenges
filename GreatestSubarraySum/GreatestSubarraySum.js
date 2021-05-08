//This one expand my mind hahahaha
//algotithm: Kaden's algotithm



// let array = [2,3,-8,4,5];
let array = [-2,-3,10,10,10,-4,-5];

let result = greatestSubarraySum(array);
console.log(result);

function greatestSubarraySum(array) {
    let globalSum = -Infinity;
    let localSum = 0;
    for (let element of array) {
        localSum = Math.max(element, localSum + element);
        globalSum = Math.max(globalSum, localSum);
    }
    return globalSum;
}