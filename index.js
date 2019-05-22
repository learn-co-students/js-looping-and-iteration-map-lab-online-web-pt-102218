// Code your solution in this file.
const drivers = ['Berto'];

function lowerCaseDrivers(drivers) {
  
  let newDrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
    });
    return newDrivers;
  }



console.log(lowerCaseDrivers(drivers))

function nameToAttributes(drivers) {

  let driversAttributes = drivers.map(function(driver){
    const firstName = driver.split(' ')[0];
    const lastName = driver.split(' ')[1];
    return {
      firstName: firstName,
      lastName: lastName
    };
  });
  return driversAttributes;
}

function attributesToPhrase(drivers) {
  let driversPhrase = drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });
  return driversPhrase;
}