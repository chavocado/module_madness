// Module Three
//
// The third module should require the other two modules (i.e. Module One and Module Two).
// It should have two function exports:
// The first function export should return the result of the first module being passed into the second module.
// The second function export should return the text “Account balance: \n”.
var convert = require('./convert');
var random = require('./random');

//console.log(random);

var dowork = function(){
  return convert(random);
};

var accBal = function(){
  var accString = "Account balance: \n";
  return accString
}

module.exports.dowork = dowork;
module.exports.accBal = accBal;
