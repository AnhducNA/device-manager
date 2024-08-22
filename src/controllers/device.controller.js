const deviceService = require("../services/device.service");

exports.getAll = async (req, res) => {
  try {
    const data = await deviceService.getAllData();
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.getDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deviceService.getDetail(id);
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
    const data = await deviceService.createData(body);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
