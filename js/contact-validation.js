document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    feedback.textContent = "";
    feedback.style.color = "red";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      feedback.textContent = "Please fill out all fields.";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = "Please enter a valid email address.";
      return;
    }

    // If all validations pass
    feedback.style.color = "green";
    feedback.textContent = "Thank you! Your message has been submitted.";
    form.reset();
  });
});
