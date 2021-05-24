function isAnagram(a,b){

    let mapA = new Map();
    let mapB = new Map();
    let aUpper = a.toUpperCase();
    let bUpper = b.toUpperCase();

    for (letter of aUpper) {
        if (mapA.get(letter) != undefined) {
            let value = mapA.get(letter);
            mapA.set(letter, value++);
        } else {
            mapA.set(letter, 1);
        }
    }
    console.log(mapA);

    for (letter of bUpper) {
        if (mapB.get(letter) != undefined) {
            let value = mapB.get(letter);
            mapB.set(letter, value++);
        } else {
            mapB.set(letter, 1);
        }
    }    
    console.log(mapB);

    if (mapA.size == mapB.size) {
        for (let [key, value] of mapA) {            
            if (mapA[key] != mapB[key]){
                return false;
            } 
        }
    } else {
        return false;    
    }

    return true;
}

function isAnagramOp2(a,b){

    let aUpper = a.toUpperCase();
    let bUpper = b.toUpperCase();

    for (letter of aUpper) {
        if (bUpper.indexOf(letter) > -1) {
            bUpper = bUpper.replace(letter, "");
            console.log(bUpper);
        }
    }

    return (bUpper.length == 0);    
}

let a = "Roma";
// let b = "Amor";

// let a = "America";
let b = "Iracema";

let result = isAnagramOp2(a,b);
console.log(result);