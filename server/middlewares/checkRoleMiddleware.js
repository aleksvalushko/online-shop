const jwt = require('jsonwebtoken');
const apiErrors = require('../error/apiErrors');

module.exports = function(role) {
  return function(request, response, next) {
    if (request.method === 'OPTIONS') {
      next();
    }
    try {
      const token = request.headers.authorization.split(' ')[1];
      if (!token) {
        return next(apiErrors.notAuthorized('Пользователь не авторизован.'));
      }
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      if (decode.role !== role) {
        return next(apiErrors.forbidden('Доступ запрещен.'));
      }
      request.user = decode;
      next();
    } catch (error) {
      return next(apiErrors.notAuthorized('Пользователь не авторизован.'));
    }
  };
};