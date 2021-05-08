//Compare arrays

//Example 1:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i']
//return false

//Example 2:
//const array1 = ['a', 'b', 'c', 'x']
//const array2 = ['z', 'y', 'x'];
//return true

//Example 3: Erros check
const array1 = ['z','a', 'c']
const array2 = ['x'];
//return false

//Brutal force Big O(a * b) = O(n^2)
//Space complexity: O(1) We are not using variables
//This solution is slow but consume less memory
function containsCommonItem1(arr1, arr2) {  //Big O(n^2) 
  for (let i = 0; i < arr1.length; i++) {        
    for (let j = 0; j < arr2.length; j++) {              
      if (arr1[i] === arr2[j]){
          console.log("FOUND");
          return true;
      }
    }
  }    
  return false;
}

//Better solution: Big O(a + b); More efficient;
//Space complexity: O(a) 
//This solution is faster but consume more memory
function containsCommonItem2(arr1, arr2) {
    //1. loop through first array and create a object where properties === items in the array
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    console.log(map);    
    
    //2. loop through second array and check if them in second array exists on created object
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

//Another option exclusive in Javascript
//Different readability 
function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

let result = containsCommonItem2(array1, array2);
console.log("Result = " + result);
