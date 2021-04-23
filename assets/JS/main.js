const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  $.querySelector("#connect").addEventListener("click", () => {
    console.log("connect");
    $.querySelector(".hidden").classList.add("display");
  });

  $.querySelector("#cross").addEventListener("click", () => {
    console.log("connect");
    $.querySelector(".hidden").classList.remove("display");
  });

  $.querySelector("#contactForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = {
      firstname: $.querySelector("#firstName").value,
      lastname: $.querySelector("#lastName").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };

    const response = await axios.post(
      "https://tripadvisor-backend-julian.herokuapp.com/",
      data
    );
    console.log(response);
    alert("Le formulaire a bien été envoyé!");
  });
});
