function numberOfWays(queries) {             

    let arrayResult = [];

    for(let i in queries) {                
        // console.log(queries[i]);

        let biggerSide = queries[i][0];
        let minorSide = queries[i][1]
        
        if (queries[i][1] > queries[i][0]) {
            biggerSide = queries[i][1];
            minorSide = queries[i][0]
        }

        // console.log("BiggerSide:" + biggerSide);
        // console.log("MinorSide:" + minorSide);

        let count = 0;

        while (minorSide >= 1){
            count = count + (biggerSide * minorSide)
            biggerSide--;
            minorSide--;
        }
        arrayResult.push(count);
    }
    return arrayResult;
}


let matrix = [ [2,1], [2,3] ];
let result = numberOfWays(matrix);
console.log(result);