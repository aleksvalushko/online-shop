const { Device, DeviceInfo } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const apiErrors = require('../error/apiErrors');

class DeviceController {
  async create(request, response, next) {
    try {
      let { name, price, brandId, typeId, info } = request.body;
      const { img } = request.files;
      const fileName = uuid.v4() + '.jpg';
      await img.mv(path.resolve(__dirname, '..', fileName));

      const device = await Device.create({ name, price, brandId, typeId, img: fileName });

      if (info) {
        info = JSON.parse(info);
        info.forEach((elem) => {
          DeviceInfo.create({
            deviceId: elem.id,
            title: elem.title,
            description: elem.description
          });
        });
      }
      return response.json(device);
    } catch (error) {
      return next(apiErrors.badRequest((error.message)));
    }
  }

  async getDevices(request, response) {
    let { brandId, typeId, page, limit } = request.body;
    page = page || 1;
    limit = limit || 10;
    const offset = page * limit - limit;

    let devices;
    if (!brandId && !typeId) {
      devices = Device.findAndCountAll({ limit, offset });
    }
    if (!brandId && typeId) {
      devices = Device.findAndCountAll({ where: { typeId }, limit, offset });
    }
    if (brandId && !typeId) {
      devices = Device.findAndCountAll({ where: { brandId }, limit, offset });
    }
    if (brandId && typeId) {
      devices = Device.findAndCountAll({ where: { brandId, typeId }, limit, offset });
    }
    return response.json(devices);
  }

  async getDevice(request, response) {
    const { id } = request.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: 'info' }]
    });
    return response.json(device);
  }
}

module.exports = new DeviceController();