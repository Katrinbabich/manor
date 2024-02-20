const uuid = require('uuid')
const path = require('path');
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError');
const fs = require("fs").promises;
const Sequelize = require("../db");
class DeviceController {
    async create(req, res, next) {
        try{
            let {name, price, brandId, typeId, info, kontact, kolmest, adres, desc} = req.body
            const {img} = req.files
            let fileName = uuid.v4()+".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({name, price, brandId, typeId, img: fileName, kontact, kolmest, adres, desc})

            if (info){
                info = JSON.parse(info)
                info.forEach(i=>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }

            return res.json(device)

        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if (!typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (typeId) {
            devices = await Device.findAndCountAll({where:{typeId},limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }

    async update(req, res, next) {
        try {
            const { id,name, price,  typeId, img, kontact, kolmest, info, adres, desc } = req.body;
            const device = await Device.findOne({ where: { id } });
            let fileName;
            try {
                const { img } = req.files;
                fileName = uuid.v4() + ".jpg";
                img.mv(path.resolve(__dirname, "..", "static", fileName));
                await fs.unlink(path.resolve(__dirname, "..", "static", device.img));
            } catch (error) {
                fileName = device.img;
            }

            await Device.update(
                { name, price,  typeId, img: fileName, kontact, kolmest, adres, desc },
                { where: { id } }
            );
            if (info.length != 0) {
                const parseInfo = JSON.parse(info);

                parseInfo.map((element) => {
                    if (element.create) {
                        DeviceInfo.create({
                            title: element.title,
                            description: element.description,
                            deviceId: device.id,
                        });
                    } else {
                        DeviceInfo.update(
                            {
                                title: element.title,
                                description: element.description,
                            },
                            { where: { deviceId: device.id, id: element.id } }
                        );
                    }
                });
            }
            return res.json({ message: "Место обновлено" });
        } catch (error) {
            next(ApiError.badRequest("Ошибка обновления " + error.message));
        }
    }
    async deleteOne(req, res) {
        try {
            const { id } = req.params;

            const device = await Device.findOne({ where: { id } });
            if (device) {
                await Device.destroy({ where: { id } });
                await fs.unlink(path.resolve(__dirname, "..", "static", device.img));
                return res.json({ message: "Место удалено", device });
            } else {
                return res.json({ message: "Не существует" });
            }
        } catch (error) {
            console.log("Ошибка", error);
        }
    }
}
module.exports = new DeviceController()