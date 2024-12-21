function sendMail() {
  document
    .getElementById("hireForm11")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      const services = [];
      if (document.getElementById("opt-1").checked)
        services.push("Server Creation");
      if (document.getElementById("opt-2").checked)
        services.push("Website MGT");
      if (document.getElementById("opt-3").checked)
        services.push("Video Editing");
      if (document.getElementById("opt-4").checked)
        services.push("VPS Services");
      if (document.getElementById("opt-5").checked) services.push("Webdesign");
      if (document.getElementById("opt-6").checked) services.push("Marketing");

      const message = services.join(", ");

      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Selected Services:", message);
      if (message === "") {
        alert("Please select a service first");
        return;
      }
      emailjs.send("service_xgjowv3", "template_5ra914h", { name, email, message })
        .then(
          function (response) {
            alert("Your request has been sent successfully");
          },
          function (error) {
            alert("Your request has not been sent successfully");
            console.error("Error:", error);
          }
        );
        document.getElementById("hireForm11").reset();
    });
}
