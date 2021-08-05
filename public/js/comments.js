// window.onload = (function () {
//   const form = document.querySelector(".comments__form");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//   });
// })();

const handleAddComment = async (event) => {
  event.preventDefault();
  try {
    const reviewerName = document.querySelector(
      "#comments__form-label-name"
    ).value;
    const reviewerEmail = document.querySelector(
      "#comments__form-label-mail"
    ).value;
    const reviewerInterest = document.querySelector(
      "#comments__form-label-interest"
    ).value;
    const reviewerComment = document.querySelector(
      "#comments__form-label-text"
    ).value;

    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        reviewerName,
        reviewerEmail,
        reviewerInterest,
        reviewerComment,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      alert("Falied to add comment");
      return;
    }

    window.location.replace("/comments");
  } catch (err) {
    console.log(err);
  }
};

document
  .querySelector(".comments__form")
  .addEventListener("submit", handleAddComment);
