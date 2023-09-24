const { Type } = require('../models/models');
const apiErrors = require('../error/apiErrors');

class TypeController {
  async create(request, response) {
    const { name } = request.body;
    const type = await Type.create({ name });
    return response.json(type);
  }

  async get(request, response) {
    const types = await Type.findAll();
    return response.json(types);
  }

  async delete(request, response, next) {
    const { id } = request.body;

    const type = await Type.findOne({
      where: { id }
    });
    if (!type) {
      return next(apiErrors.notFound('There is no such type.'));
    }

    await Type.destroy({
      where: { id }
    });

    return response.json({ message: 'success' });
  }
}

module.exports = new TypeController();