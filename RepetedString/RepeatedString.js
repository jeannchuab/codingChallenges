//Calculetes the number of char "a" in a infinity string

//Memory problem
function repeatedString(s, n){    
    let array = [];
    while (array.length <= n) {
        array.push(s)
    }
    console.log(s);

    let count = 0
    for (let i = 0; i < n; i++){
        if (array[i] == "a") {
            count++;
        }
    }
    return count;
} 

function repeatedStringOp2(s, n){    
    
    //Calculates how many char "a" exists in s
    let howManyAsInS = 0
    for (let i = 0; i < s.length; i++){
        if (s[i] == "a") {
            howManyAsInS++;
        }
    }    

    //How many s it's needed to form a string with n char
    let div = Math.trunc(n / s.length);
    let result = 0;

    //I need to consider when s.lenght < a
    if (div == 1) {        
        let res = s.slice(0,n);

        for (let i = 0; i < res.length - 1; i++){
            if (s[i] == "a") {
                result++
            }
        }

    } else {
        //How many more char needed to complete the string with n char
        let rest = n % s.length;

        //Counts how many char "a" exists
        result = howManyAsInS * div;
        for (let i = 0; i < rest; i++){
            if (s[i] == "a") {
                result++
            }
        }
    }
    return result;
}

let text = "abacccdddaa"; //
let result = repeatedStringOp2(text, 3);
console.log("Result = " + result);