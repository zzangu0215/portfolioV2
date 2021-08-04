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

router.get("/group-projects", async (req, res) => {
  try {
    const groupProjectData = await Projects.findAll({
      where: {
        isTeamProject: true,
      },
    });

    const groupProjects = groupProjectData.map((gp) => gp.get({ plain: true }));

    res.render("group-projects", {
      groupProjects,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/personal-projects", async (req, res) => {
  try {
    const personalProjectData = await Projects.findAll({
      where: {
        isTeamProject: false,
      },
    });

    const personalProjects = personalProjectData.map((pp) =>
      pp.get({ plain: true })
    );

    res.render("personal-projects", {
      personalProjects,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

module.exports = router;
