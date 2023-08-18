const Address = require("../models/address");

exports.create = async (req, res) => {
  try {
    const { email } = req.user;

    const { name, phoneNumber, address, addressPosition } = req.body;

    const dbRes = await Address.create({
      userEmail: email,
      name,
      phoneNumber,
      address,
      addressPosition,
    });

    res.send(dbRes);
  } catch (error) {
    res.status(402).send(error.message);
  }
};

exports.getAll = async (req, res) => {
  try {
    const { email } = req.user;
    const dbRes = await Address.findAll({ where: { userEmail: email } });
    res.send(dbRes);
  } catch (error) {
    res.status(402).send(error.message);
  }
};

exports.edit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phoneNumber, address, addressPosition } = req.body;

    const dbRes = await Address.update(
      { name, phoneNumber, address, addressPosition },
      { where: { id: id } }
    );

    res.send({ id, ...req.body });
  } catch (error) {
    res.status(402).send(error.message);
  }
};
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Address.destroy({ where: { id } });

    res.send(true);
  } catch (error) {
    res.status(402).send(error.message);
  }
};
