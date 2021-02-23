

function factorial(value) {    
    if (value <= 2) {
        return value
    } else {
        return (value) * factorial(value - 1)
    }
}

let result = factorial(10)

console.log("Result = " + result)