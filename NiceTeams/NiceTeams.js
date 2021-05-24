function niceTeams(skillLevel, minDiff) {
       
    let mapSkill = new Map();    

    for (item of skillLevel) {
        mapSkill.set(item);
    }

    for ([key, value] of mapSkill) {
        if (mapSkill.has(key + minDiff)) {            
            mapSkill.set(key, key + minDiff);            
        }
    }
    console.log(mapSkill);

    for ([key, value] of mapSkill) {
        if (mapSkill.has(value) || value == undefined ) {
            mapSkill.delete(key);
        }       
    }

    console.log(mapSkill);
    return mapSkill.size;
}


let skillLevel = [0,6,3,3,1];
let minDiff = 2;
let result = niceTeams(skillLevel, minDiff);
console.log(result);