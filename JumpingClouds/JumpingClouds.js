//Jumping Clouds
//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function jumpingClouds(c){

    let i = 0;
    let clouds = [c[i]];    

    while (i < c.length - 1) {
        if (c[i + 2] == 1 || c[i + 2] == undefined) {            
            clouds.push(i + 1);
            i = i + 1;
        } else if (c[i + 2] == 0) {            
            clouds.push(i + 2);
            i = i + 2;            
        } else {
            i++;
        }
    }
    console.log(clouds);
    return clouds.length - 1;
}

// const nums = [0,0,1,0,0,1,0]; 
const nums = [0,0,0,1,0,0]; //output = 3
result = jumpingClouds(nums);
console.log(result);