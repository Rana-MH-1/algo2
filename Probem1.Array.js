var set1 = [12, 13, 6, 10];
var set2 = [13, 10, 16, 15];
var sum_commun = 0;
var sum_distinct = 0;
var set = set1.concat(set2)
var found = false;

for(let i =0;i<set.length;i++){
    found = false;
    for(let j=0;j<set.length;j++){
        if(set[i]==set[j] && i!=j){
            found = true;
            sum_commun += set[i];
        }
    }
    if(found== false){
        sum_distinct += set[i]
    }
    
}
console.log("el dinstinct",sum_distinct)
console.log("el overlapping",sum_commun)