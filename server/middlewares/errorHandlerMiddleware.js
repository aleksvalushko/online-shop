const apiErrors = require('../error/apiErrors');

module.exports = function(error, request, response, next) {
  if (error instanceof apiErrors) {
    return response.status(error.status).json({message: error.message});
  }
  return next(apiErrors.serverError('Something went wrong.'));
}