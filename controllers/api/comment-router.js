const router = require("express").Router();
const { Comments } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newComment = await Comments.create({
      name: req.body.reviewerName,
      email: req.body.reviewerEmail,
      interests: req.body.reviewerInterest,
      reviews: req.body.reviewerComment,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
