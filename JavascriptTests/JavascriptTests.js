//Javascript Tests

// let array = [1.50, 2, 2.5, 1.80, 1.00]; 
// exibeNomes();

let nums = [{x: 1, y:1}, {x: 2, y:2}, {x: 1, y:2}, {x: 5, y:5}, {x: 1, y:2}];
let result = -Infinity;
result = getCount(nums)
console.log(result);

function exibeNomes() {

    let listaNomes = ['Bruna', 'João', 'Jeann', 'Pedro', 'Paulo', 'Bianca'];
    // console.log(listaNomes);

    for (let i = 0; i < listaNomes.length; i++){        
        if (listaNomes[i] == 'Jeann') {
            console.log('Posição:' + i + " - " + listaNomes[i]);            
        }        
    }
}

function calculaMaiorMenorOp1(array) {
    let menor = 0;
    let maior = 0;

    for (let i = 0; i < 3; i++){    
        for (let j = 0; j < 3; j++){
            if (array[i] > array[j]){
                maior = array[i];
            } else if (array[i] < array[j]){
                menor = array[i];
            }        
        }
    }
    console.log("Menor: " + menor + "Maior: " + maior);
}

function calculaMaiorMenorOp2(array) {
    let arrayOrd = array.sort();    
    console.log("Menor: " + arrayOrd[0] + "Maior: " + arrayOrd[arrayOrd.length - 1]);
}

function calculaMaiorMenorOp3(array) {
    
    let menor = 0;
    let maior = 0;

    for (let i = 0; i < 3; i++){            
        for (let j = 0; j < 3; j++){        
            if (array[i] > array[j]){
                maior = array[i];
            } else if (array[i] < array[j]){
                menor = array[i];
            }            
        }
    }
    console.log("Menor: " + menor + "Maior: " + maior);
    console.log("Menor: " + arrayOrd[0] + "Maior: " + arrayOrd[arrayOrd.length - 1]);
}

function getCount(objects) {    
    let count = 0;    
    for (let p in objects) {        
        if (objects[p].x == objects[p].y) {
            count++;
        }        
    }
    return count;    
}