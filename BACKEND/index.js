require("dotenv").config();
const express = require("express");
const sequelize = require("./utils/database");
const cors = require("cors");
const body_parser = require("body-parser");

const app = express();
app.use(cors());
app.use(body_parser.urlencoded({ extended: false }));
app.use(express.json());

let databaseReady;
const prepareDatabase = async () => {
  if (!databaseReady) {
    databaseReady = sequelize.authenticate().then(() => sequelize.sync());
  }

  return databaseReady;
};

app.use(async (req, res, next) => {
  try {
    await prepareDatabase();
    next();
  } catch (error) {
    next(error);
  }
});

// Routes
const user = require("./routes/user");
const carousel_ad = require("./routes/carousel-ad");
const mainCategory = require("./routes/mainCategory");
const subCategory = require("./routes/subCategory");
const product = require("./routes/product");
const productType = require("./routes/productType");
const cartItems = require("./routes/cartItems");
const address = require("./routes/address");
const orderItem = require("./routes/orderItem");

// Relations
require("./relations/relations")();

// Middlewares
app.use(user);
app.use(carousel_ad);
app.use(mainCategory);
app.use(subCategory);
app.use(product);
app.use(productType);
app.use(cartItems);
app.use(address);
app.use(orderItem);

app.get("/health", (req, res) => {
  res.send({ ok: true });
});

const start = async () => {
  try {
    await prepareDatabase();

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`APP IS LISTENING ON ${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send(error.message);
});

if (require.main === module) {
  start();
}

module.exports = app;
