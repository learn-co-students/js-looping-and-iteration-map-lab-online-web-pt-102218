function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) { return driver.toLowerCase()})
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let separated = driver.split(" ")
    return Object.assign({}, {firstName: separated[0]}, {lastName: separated[1]})
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) { return `${driver.name} is from ${driver.hometown}`
  })
}
