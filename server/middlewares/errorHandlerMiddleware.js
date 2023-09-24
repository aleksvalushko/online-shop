const apiError = require('../error/apiErrors');

module.exports = function(error, request, response, next) {
  if (error instanceof apiError) {
    return response.status(error.status).json({message: error.message});
  }
  return next(apiError.serverError('Something went wrong.'));
}