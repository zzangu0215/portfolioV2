const router = require("express").Router();
const commentRouter = require("./comment-router");

router.use("/comment", commentRouter);

module.exports = router;
