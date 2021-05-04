/*
If the element is even, multiply the element by .
If the element is odd, multiply the element by .
https://www.hackerrank.com/challenges/js10-arrows/problem
*/

function multiplyOddEvenOp1(nums) {
    for (i in nums) {
        if (nums[i] % 2 == 0) {
            console.log("Even (Par):" + nums[i]);
            nums[i] = nums[i] * 2;
        } else {
            console.log("Odd (Impar):" + nums[i]);
            nums[i] = nums[i] * 3;
        }
    }
    return nums;
}

function multiplyOddEvenOp2(nums) {

    const evenOddMultiply = nums.map(s => {
        if (s % 2 == 0) {
            console.log("Even (Par):" + s);
            return s * 2;
        } else {
            console.log("Odd (Impar):" + s);
            return s * 3;
        }
    });
    return evenOddMultiply;
}

const nums = [1,2,3,4,5,6,7,8,9,10];

// let result = multiplyOddEvenOp1(nums);
// console.log(result);


result = multiplyOddEvenOp2(nums);
console.log(result);