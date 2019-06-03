// Code your solution in this file.
function lowerCaseDrivers(dArr) {
  return dArr.map (d => d.toLowerCase() );
};

function nameToAttributes(dArr) {
  // dArr contains driver Fn & Ln space separated.
  // This function takes those names and returns an array of objects with 'firstName' and 'lastName' attributes.
  return dArr.map (function(d) { return Object.assign( {}, {firstName: d.split(" ")[0], lastName: d.split(" ")[1]})});
};


function attributesToPhrase(dArr) {
  // takes array of drivers as JSOs and returns a string saying "NAME is from HOMETOWN" for each JSO in the array
  return dArr.map (d => `${d.name} is from ${d.hometown}`)
}