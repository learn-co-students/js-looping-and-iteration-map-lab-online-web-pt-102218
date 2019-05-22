// Code your solution in this file.
function lowerCaseDrivers(drivers){
    return drivers.map(function(name){return name.toLowerCase()})
}

function nameToAttributes(drivers){
    // const arrayOfDrivers = []
    return drivers.map(function(driver){
        
        let array = [];

        array = driver.split(" ");
        const object = {
            "firstName" : array[0],
            "lastName" : array[1]
        };
        // arrayOfDrivers.push(object)
        return object;
    })
}

function attributesToPhrase(attributes){
    return attributes.map(function(attributesObject){
        return `${attributesObject['name']} is from ${attributesObject['hometown']}` 
    })
}