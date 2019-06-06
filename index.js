// Code your solution in this file.
function lowerCaseDrivers(arr){
    return arr.map(function(object){return object.toLowerCase()})
}
    
function nameToAttributes(arr){
    return arr.map(function(object){
        let fullName = object.split(" ")
        const driver = {
            "firstName" : fullName[0],
            "lastName" : fullName[1]
        }
        return driver
    })
}

function attributesToPhrase(arr){
    return arr.map(function(driver){return `${driver.name} is from ${driver.hometown}`})
}