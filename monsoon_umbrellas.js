function getUmbrellas(requirement, sizes) {

    let smallestAmt = Infinity

    sizes.forEach(num => {
        if (num <= requirement && (requirement % num) === 0) {
            let temp = requirement / num

            if (temp < smallestAmt) {
                smallestAmt = temp
            }
        }
    })

    return smallestAmt === Infinity ? -1 : smallestAmt
}

let requirement = 4
let sizes = [2,2,4]

console.log(getUmbrellas(requirement, sizes))