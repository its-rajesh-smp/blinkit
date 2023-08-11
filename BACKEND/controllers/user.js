const User = require("../models/user");
const bcrypt = require("bcrypt");
const { createJwt, verifyJwt } = require("../services/jwt");

exports.signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Generating Hash
    const hash = bcrypt.hash(password, process.env.SALT);

    // Storing The User
    await User.create({ email, password: hash });

    // Generating idToken
    const idToken = createJwt({ email, password });

    // Froming Payload
    const payload = { email, password, idToken };

    res.status(201).send(payload);
  } catch (error) {
    res.status(403).send(false);
  }
};
exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Geting The User
    const dbRes = await User.findByPk({ where: { email: email } });

    // If User Not Found
    if (dbRes === null) {
      res.status(404).send("User Not Found");
    }

    // Check Hash
    const hash = bcrypt.compareSync(password, dbRes.password);

    // If Hash not matched
    if (!hash) {
      res.status(401).send("Password Not Matched");
    }

    // Generating idToken
    const idToken = createJwt({ email, password });

    // Froming Payload
    const payload = { email, password, idToken };

    res.status(201).send(payload);
  } catch (error) {
    res.status(404).send(false);
  }
};
exports.get = async (req, res) => {
  try {
    const { idToken } = req.body;

    const { email, password } = verifyJwt(idToken);

    // Geting The User
    const dbRes = await User.findByPk({ where: { email: email } });

    // If User Not Found
    if (dbRes === null) {
      res.status(404).send("User Not Found");
    }

    // Check Hash
    const hash = bcrypt.compareSync(password, dbRes.password);

    // If Hash not matched
    if (!hash) {
      res.status(401).send("Password Not Matched");
    }

    // Froming Payload
    const payload = { email, idToken };

    res.status(201).send(payload);
  } catch (error) {
    res.status(404).send(false);
  }
};
exports.update = async (req, res) => {};
