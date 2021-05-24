//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
//0, 1, 2, 3, 4, 5, 6, 07, 08, 09, 10, 11, 012, 013...

let calcSlow = 0;
function fibonacciSlow(n) { //O(2^n)
    calcSlow++;
    if (n < 2) {
        return n
    } else {
        return fibonacciSlow(n-1) + fibonacciSlow(n-2);
    }
}

let calcFast = 0;
function fibonacciFast() { //O(n)
    let cache = {};    

    return function fib(n) {
        calcFast++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }    
}

let calcOp3 = 0;
function fibonacciOp3(n){ //Space complexity = O(n); Time Complexity = (n)
    let answer = [0,1];
    for (let i = 2; i <= n; i++) {
        calcOp3++;
        answer.push(answer[i-2] + answer[i-1]);
        
    }
    console.table(answer);
    return answer.pop();
}

// console.log(fibonacciSlow(30));
// console.log("calculations slow: ", calcSlow);

// const constFibonacciFast = fibonacciFast();
// console.log(constFibonacciFast(30));
// console.log("calculations fast: ", calcFast);

console.log(fibonacciOp3(26));
console.log("calculations op3: ", calcOp3);