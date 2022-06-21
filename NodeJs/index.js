// code to get the random name of the project name

var generate = require('project-name-generator');

console.log("project name by dash = "+generate().dashed);

console.log("project name with spacing = "+generate().spaced);


// get random supervillains name
const supervillains = require('supervillains');
console.log("supervillain name = "+supervillains.random());
