const Address = require("../models/address");
const CartItem = require("../models/cartItems");
const ProductType = require("../models/productType");
const Product = require("../models/product");
const OrderItem = require("../models/orderItem");
const Payment = require("../models/payment.js");
const Razorpay = require("razorpay");

exports.createOrder = async (req, res) => {
  try {
    const { email } = req.user;

    // GET ALL CART ITEMS
    const productRes = await CartItem.findAll({
      where: { userEmail: email },
      include: [ProductType],
    });

    // IF NO CART ITEM PRESENT
    if (productRes.length === 0) {
      return res.status(404).send("No item found in your cart");
    }

    // CALCULATING TOTAL
    const totalPrice = productRes.reduce((acc, curr) => {
      return acc + curr.dataValues.producttype.price * curr.dataValues.quantity;
    }, 0);

    // CREATING RAZORPAY ORDER WITH ADDRESS ON NOTE
    var rzp = new Razorpay({
      key_id: process.env.RZP_KEY_ID,
      key_secret: process.env.RZP_KEY_SECRET,
    });

    const order = await rzp.orders.create({
      amount: totalPrice * 100,
      currency: "INR",
    });

    // STORING ORDER
    await Payment.create({ userEmail: email, orderId: order.id });

    res.send(order);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.onPaymentSuccess = async (req, res) => {
  try {
    const { email } = req.user;
    const { addressId, paymentOrderId, paymentId } = req.body;

    // GET THE ADDRESS
    const address = await Address.findOne({
      where: {
        id: addressId,
      },
      attributes: ["name", "phoneNumber", "address", "addressPosition"],
    });

    // GET ALL CART ITEMS
    const cartItemRes = await CartItem.findAll({
      where: { userEmail: email },
      include: [{ model: ProductType, include: [Product] }],
    });

    // Forming Payload Array
    const payloadArray = cartItemRes.map((item) => {
      return {
        deliveryName: address.dataValues.name,
        phoneNumber: address.dataValues.phoneNumber,
        address: address.dataValues.address,
        addressPosition: address.dataValues.addressPosition,
        userEmail: email,
        producttypeId: item.producttype.id,
        quantity: item.quantity,
        productId: item.producttype.product.id,
        paymentOrderId: paymentOrderId,
      };
    });

    // Changing The Payment Status
    await Payment.update(
      { paymentId: paymentId, status: "PAID" },
      { where: { orderId: paymentOrderId, userEmail: email } }
    );

    // Clearing The Cart
    await CartItem.destroy({ where: { userEmail: email } });

    const dbRes = await OrderItem.bulkCreate(payloadArray);
    res.send(dbRes);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.onPaymentFailed = async (req, res) => {
  try {
    const { email } = req.user;
    const { paymentOrderId, status } = req.body;

    await Payment.update(
      { status: status },
      { where: { orderId: paymentOrderId, userEmail: email } }
    );

    res.send(false);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.getAll = async (req, res) => {
  try {
    const { email } = req.user;
    const dbRes = await OrderItem.findAll({
      where: { userEmail: email },
      include: [{ model: ProductType, include: [Product] }],
    });
    res.send(dbRes);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
