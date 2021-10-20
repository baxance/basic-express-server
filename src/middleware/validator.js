const { nextTick } = require("process");
const { empty } = require("statuses");

`use strict`

module.exports = function (query, next) {
console.log(query);


if(query != empty) {
  next();
} else {
    next("no input detected")
  }
};