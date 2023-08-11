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

// Middlewares
app.use(user);

// Relations

// App Start
sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("APP IS LISTENING");
    });
  })
  .catch((error) => console.log(error));
