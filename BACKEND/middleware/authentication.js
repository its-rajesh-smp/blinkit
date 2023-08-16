const User = require("../models/user");
const { verifyJwt } = require("../services/jwt");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  try {
    const { idtoken } = req.headers;

    // Getting Email & Password from idtoken
    const { email, password } = verifyJwt(idtoken);

    // Finding User
    const dbRes = await User.findOne({ where: { email } });

    // If User Not Present
    if (!dbRes) {
      res.status(404).send("USER NOT PRESENT");
      return;
    }

    // Checking Hash
    const compareHash = bcrypt.compareSync(password, dbRes.password);

    // If Hash Not Matched
    if (!compareHash) {
      res.status(404).send("Password Not Matched");
      return;
    }

    req.user = dbRes.dataValues;

    next();
  } catch (error) {
    res.status(404).send(error.message);
  }
};
