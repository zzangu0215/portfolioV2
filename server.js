require("dotenv").config();
const exphbs = require("express-handlebars");
const express = require("express");
const path = require("path");
const sequelize = require("./config/connection");
const router = require("./controllers");
const helpers = require("./util/helpers");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", exphbs({ helpers }));
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) {
        console.error(err);
        return process.exit(1);
      }
      console.log(`App listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
