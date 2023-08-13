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

// Middlewares
app.use(user);
app.use(carousel_ad);
app.use(mainCategory);

// Relations

// App Start
sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("APP IS LISTENING");
    });
  })
  .catch((error) => console.log(error));
