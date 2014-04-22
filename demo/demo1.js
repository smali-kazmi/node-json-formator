/**
 * 
 * Before Usaging this plugin please install first
 */
var f = require('./json-formator');

var data = '{"number":1,"string":"Stirng is here","float":1.4,"boolean_true":true,"boolean_false":false,"object":[1,2,3,4,5],"nested":{"level 1":{"number":1,"string":"Stirng is here","float":1.4,"boolean_true":true,"boolean_false":false,"level 2":{"number":1,"string":"Stirng is here","float":1.4,"boolean_true":true,"boolean_false":false,"level 3":{"number":1,"string":"Stirng is here","float":1.4,"boolean_true":true,"boolean_false":false}}}}}';
console.log(f.format(data));