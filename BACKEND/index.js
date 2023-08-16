require("dotenv").config();
const express = require("express");
const sequelize = require("./utils/database");
const cors = require("cors");
const body_parser = require("body-parser");

const app = express();
app.use(cors());
app.use(body_parser.urlencoded({ extended: false }));
app.use(express.json());

// Routes
const user = require("./routes/user");
const carousel_ad = require("./routes/carousel-ad");
const mainCategory = require("./routes/mainCategory");
const subCategory = require("./routes/subCategory");
const product = require("./routes/product");
const productType = require("./routes/productType");
const cartItems = require("./routes/cartItems");

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

// App Start
sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("APP IS LISTENING");
    });
  })
  .catch((error) => console.log(error));
