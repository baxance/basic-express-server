`use strict`;

module.exports = function (req, res, next) {
console.log(req.method);

let method = req.method;
if(method === 'POST' || method === 'GET') {
  next();
} else {
    next('somnething went wrong');
  }
};