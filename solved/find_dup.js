function findDuplicate(nums) {
=    let tort = nums[0]
    let hare = nums[0]
    
    while (true) {
        tort = nums[tort] 
        hare = nums[nums[hare]] 
        
        if (tort === hare) break
    }
    
    let p1 = nums[0]
    let p2 = tort

    while (p1 !== p2) { 
        p1 = nums[p1] 
        p2 = nums[p2]
    }

    return p1

}

let nums = [1,4,3,5,6,1,2]
console.log(findDuplicate(nums))