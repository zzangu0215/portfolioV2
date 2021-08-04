const router = require("express").Router();
const { Projects } = require("../models");

// const withAuth = require("../util/withAuth");

router.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    console.error(err);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/projects", async (req, res) => {
  try {
    const projectsData = await Projects.findAll({
      where: {
        user_id: 1,
      },
    });

    const projects = projectsData.map((project) =>
      project.get({ plain: true })
    );

    res.render("projects", {
      projects,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

module.exports = router;
