const User = require("../models/user");
const bcrypt = require("bcrypt");
const { createJwt, verifyJwt } = require("../services/jwt");
const CartItem = require("../models/cartItems");
const ProductType = require("../models/productType");
const Address = require("../models/address");

exports.signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Generating Hash
    const hash = bcrypt.hashSync(password, +process.env.SALT);

    // Storing The User
    await User.create({ email, password: hash });

    // Generating idToken
    const idToken = createJwt({ email, password });

    // Froming Payload
    const payload = { email, idToken };

    res.status(201).send(payload);
  } catch (error) {
    res.status(403).send(error.message);
  }
};
exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Geting The User
    const dbRes = await User.findOne({ where: { email: email } });

    // If User Not Found
    if (dbRes === null) {
      res.status(404).send("User Not Found");
      return;
    }

    // Check Hash
    const hash = bcrypt.compareSync(password, dbRes.password);

    // If Hash not matched
    if (!hash) {
      res.status(401).send("Password Not Matched");
      return;
    }

    // Generating idToken
    const idToken = createJwt({ email, password });

    // Froming Payload
    const payload = { email, idToken };

    res.status(201).send(payload);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
exports.get = async (req, res) => {
  try {
    const { idToken } = req.body;

    const { email, password } = verifyJwt(idToken);

    // Geting The User
    const dbRes = await User.findOne({
      where: { email: email },
      include: [
        {
          model: CartItem,
          include: [{ model: ProductType, attributes: ["price"] }],
        },
        Address,
      ],
    });

    // If User Not Found
    if (dbRes === null) {
      res.status(404).send("User Not Found");
      return;
    }

    // Check Hash
    const hash = bcrypt.compareSync(password, dbRes.password);

    // If Hash not matched
    if (!hash) {
      res.status(401).send("Password Not Matched");
      return;
    }

    delete dbRes.dataValues.password;

    res.status(201).send(dbRes);
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
};
exports.update = async (req, res) => {};
