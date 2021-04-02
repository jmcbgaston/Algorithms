function deviceNamesSystem(devicenames) {
    let uniqueNames = new Map()
    
    devicenames.forEach((device, idx) => {
        if (uniqueNames.has(device)) {
            uniqueNames.set(device, uniqueNames.get(device) + 1)
            devicenames[idx] = device + `${uniqueNames.get(device)}`
        } else {
            uniqueNames.set(device, 0)
        }
    })
    
    return devicenames
}

let devicenames = ['sw', 'tv', 'sw', 'tv']
console.log(deviceNamesSystem(devicenames))