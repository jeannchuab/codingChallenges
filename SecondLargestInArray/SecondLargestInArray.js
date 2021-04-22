
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

function secondLargest(nums){

    let largest = -1;
    let secondLargest = -1;

    // nums.sort(); //alphabetical
    nums.sort(function(a, b) { //numerical
        return a - b;
    });

    largest = nums[nums.length - 1];
    
    for (let i = nums.length - 1; i >=0; i--) {
        
        if (largest > nums[i]){
            secondLargest = nums[i];
            return secondLargest;
        }

        // console.log(nums[i])
    }
}

let array = [2,3,5,1,10]
let result = secondLargest(array);
console.log("Result = " + result);