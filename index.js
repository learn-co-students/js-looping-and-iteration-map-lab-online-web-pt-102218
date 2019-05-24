// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
    const newDrivers = drivers.map(driver => {
        const newPropObj = {
            firstName:  driver.split(" ")[0],
            lastName:  driver.split(" ")[1]
        };

          Object.assign(driver, newPropObj);

          return newPropObj;

    });
    return newDrivers;
}

function attributesToPhrase(drivers) {
    const newDrivers = drivers.map(driver => {
        return `${driver.name} is from ${driver.hometown}`
    });

    return newDrivers;
}