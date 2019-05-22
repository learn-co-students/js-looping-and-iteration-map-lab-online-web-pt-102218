// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newArray = [];
  drivers.map(function(x){
    newArray.push(x.toLowerCase());
  });
  return newArray;
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];
    return {firstName: driverFirst, lastName: driverLast};
  });
  
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`; 
  });
}

