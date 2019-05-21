// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    const out = drivers.map(function(name) { return name.toLowerCase() })
    return out
}

function nameToAttributes(drivers) {
    const out = drivers.map(function(name) { return Object.assign( {}, {firstName: name.split(' ')[0], lastName: name.split(' ')[1]}) })
    return out
}

function attributesToPhrase(drivers) {
    const out = drivers.map( function(driver) { return `${driver.name} is from ${driver.hometown}` } )
    return out
}