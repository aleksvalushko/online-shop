const jwt = require("jsonwebtoken");
const apiErrors = require("../error/apiErrors");

module.exports = function (request, response, next) {
  if (request.method === "OPTIONS") {
    next();
  }
  try {
    const token = request.headers.authorization.split(" ")[1];
    if (!token) {
      return next(apiErrors.notAuthorized("User not authorized."));
    }
    request.user = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    return next(apiErrors.notAuthorized("User not authorized."));
  }
};
