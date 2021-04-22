//Recurring element

//Given 
// let array = [0,2,5,1,2,3,5,1,2,4]
//Should return 2

//Given 
// let array = [2,1,1,2,3,5,1,2,4]
//Should return 1

//Given 
let array = [2,3,2,5]
//Should return undefined

function recurringElement(array) { //O(n)
    let map = {};
    for (let i = 0; i < array.length; i++) {
        // console.log(map)
        if (map[array[i]] !== undefined) {
            return array[i]
        } else {
            map[array[i]] = i
        }
    }    
    return undefined
}

let result = recurringElement(array);
console.log("Result = " + result);