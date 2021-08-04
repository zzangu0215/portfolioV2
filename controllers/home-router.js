const router = require("express").Router();
// const { User, Projects } = require("../models");

// const withAuth = require("../util/withAuth");

router.get("/", async (req, res) => {
  try {
    res.render("home", {
      isLoggedIn: req.session.isLoggedIn,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

module.exports = router;
