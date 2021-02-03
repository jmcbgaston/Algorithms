function minSetSize(array) {
    let hash = {}
    
    array.forEach(ele => {        
        if (!hash[ele]) {
            hash[ele] = 1
        } else {
            hash[ele] += 1
        }
    })
        
    const sorted = Object.entries(hash).sort((a,b) => b[1] - a[1]) 
        
    let result = 0
    let sum = 0;
    
    for (let i = 0; i < sorted.length; i++){
        sum += sorted[i][1];
        result++;
        if (sum >= array.length / 2){
            break;
        }
    }
        
    return result;
}