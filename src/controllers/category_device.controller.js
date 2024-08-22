const categoryDeviceService = require("../services/category_device.service");

exports.getAll = async (req, res) => {
  try {
    const data = await categoryDeviceService.getAllData();
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.getDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await categoryDeviceService.getDetail(id);
    if (!data) {
      return res.status(400).json({ message: "do not have data" });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.createData = async (req, res) => {
  try {
    const body = req.body;
    const dataDto = {
      title: body.title,
      nominal: body.nominal,
      online: body.online,
    };
    const data = await categoryDeviceService.createData(dataDto);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
