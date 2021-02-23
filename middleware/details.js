'use strict';

module.exports = (req, res, next) => {
  req.details = 'added to request by brian';
  req.instructor = 'brian nations';
  next();
}