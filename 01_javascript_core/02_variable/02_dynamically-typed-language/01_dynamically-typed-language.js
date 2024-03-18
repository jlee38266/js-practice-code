/* 01. dynamically-typed-language */

var test;
console.log(typeof test);

test = 'JavaScript';
console.log(typeof test);

test = true;
console.log('test: ', typeof test);

test = null;
console.log('test: ', test);

test = Symbol();
console.log('test: ', typeof test);

test = {};
console.log('test: ', typeof test);

test = [];
console.log('test: ', typeof test);

test = function() {};
console.log('test: ', typeof test);

