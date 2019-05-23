// Code your solution in this file.
function lowerCaseDrivers(drivers) { 
   return drivers.map( function (driver) {
      return driver.toLowerCase()});
}

function nameToAttributes(drivers) { 
    return drivers.map( function(driver) {
        const driverName = driver.split(' '); 
       return { firstName: driverName[0], lastName: driverName[1]}
    })
}
function attributesToPhrase(drivers) {
    return drivers.map( function(driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
}