const jwt = require('jsonwebtoken');
const apiError = require('../error/apiErrors');

module.exports = function(role) {
  return function(request, response, next) {
    if (request.method === 'OPTIONS') {
      next();
    }
    try {
      const token = request.headers.authorization.split(' ')[1];
      if (!token) {
        return next(apiError.notAuthorized('User not authorized.'));
      }
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      if (decode.role !== role) {
        return next(apiError.forbidden('Access denied.'));
      }
      request.user = decode;
      next();
    } catch (error) {
      return next(apiError.notAuthorized('User not authorized.'));
    }
  };
};