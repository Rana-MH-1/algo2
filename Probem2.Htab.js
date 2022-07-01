var set1 = [12, 13,6, 10];
var set2 = [13, 10, 16, 15];
var sum_commun = 0;
var sum_distinct = 0;
var set = set1.concat(set2)
var htab = new Map()
console.log(htab)


for(let i =0;i<set.length;i++){
    if(htab.has(set[i])== false){
        htab.set(set[i],1)}
    else {
        htab.set(set[i], htab.get(set[i])+1)
    }
    
}

for(const item of htab){
    if(item[1]>1){
        //console.log(item)
        sum_commun += (item[0]*item[1])
    }
    else {
        //console.log(item)
        sum_distinct += item[0]
    }
    
}
    

console.log("el dinstinct",sum_distinct)
console.log("el overlapping",sum_commun)