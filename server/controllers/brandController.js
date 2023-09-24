const { Brand } = require('../models/models');

class BrandController {
  async create(request, response) {
    const { name } = request.body;
    const brand = await Brand.create({ name });
    return response.json(brand);
  }

  async get(request, response) {
    const brands = await Brand.findAll();
    return response.json(brands);
  }
}

module.exports = new BrandController();