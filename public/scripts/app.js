"use strict";

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));
