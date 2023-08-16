const CartItem = require("../models/cartItems");
const ProductType = require("../models/productType");

exports.add = async (req, res) => {
  try {
    const { email } = req.user;
    const { producttypeId, quantity } = req.body;

    // Finding Product Type
    const productRes = await ProductType.findOne({
      where: { id: producttypeId },
    });

    // If Product Not found
    if (!productRes) {
      res.status(404).send("Product Not Found");
      return;
    }

    // Add In Cart
    const dbRes = await CartItem.create({
      quantity,
      userEmail: email,
      producttypeId,
    });
    res.send(dbRes);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const { email } = req.user;
    const { producttypeId, quantity } = req.body;

    // Finding Product Type
    const productRes = await ProductType.findOne({
      where: { id: producttypeId },
    });

    // If Product Not found
    if (!productRes) {
      res.status(404).send("Product Not Found");
      return;
    }

    // Update The Cart
    await CartItem.update(
      { quantity },
      { where: { userEmail: email, producttypeId } }
    );
    res.send(true);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const { email } = req.user;
    const { producttypeId } = req.params;

    // Delete From Cart
    const dbRes = await CartItem.destroy({
      where: { userEmail: email, producttypeId },
    });

    // If No Row Delete
    if (dbRes === 0) {
      res.status(404).send("SOMETHING WENT WRONG");
      return;
    }

    res.send(true);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
