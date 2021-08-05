const { Comments } = require("../models");

const commentData = [
  {
    name: "Israel Magallon",
    email: "izzymagallonworks@gmail.com",
    interests: "General",
    reviews:
      "I am so impressed by your work! I will definitely be forwarding your portfolio to the head of our department. We will be reaching out to you shortly.",
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
