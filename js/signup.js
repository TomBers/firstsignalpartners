/* Inline signup form: posts to the Google Form and shows a thank-you message.
   Update the IDs/options below if the Google Form changes. */
(function () {
  var FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScUo92u9E1zZybbDZl6HCqa9umLVzZrXFmEc5nP3b95vK2EXg/formResponse";
  var EMAIL_ENTRY = "entry.REPLACE_WITH_EMAIL_ENTRY_ID"; // from "Get pre-filled link"
  var ROLE_ENTRY = "entry.864193288";
  var ROLES = ["Hiring", "Looking to move", "Partner / Other"]; // must match the Google Form options exactly

  var hosts = document.querySelectorAll(".cta .container");
  if (!hosts.length) return;

  hosts.forEach(function (host) {
    var form = document.createElement("form");
    form.className = "signup";
    form.innerHTML =
      '<p class="signup-title">Register your interest</p>' +
      '<div class="signup-row">' +
      '<input type="email" name="' + EMAIL_ENTRY + '" placeholder="Your email address" aria-label="Email address" required autocomplete="email">' +
      '<select name="' + ROLE_ENTRY + '" aria-label="I am" required>' +
      '<option value="" disabled selected>I am&hellip;</option>' +
      ROLES.map(function (r) { return '<option>' + r + '</option>'; }).join("") +
      '</select>' +
      '<button type="submit" class="btn btn-primary">Sign up</button>' +
      '</div>' +
      '<p class="signup-msg" role="status" aria-live="polite"></p>';
    host.appendChild(form);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.querySelector(".signup-msg");
      var btn = form.querySelector("button");
      btn.disabled = true;
      fetch(FORM_URL, { method: "POST", mode: "no-cors", body: new FormData(form) })
        .then(function () {
          form.classList.add("done");
          msg.textContent = "Thank you \u2013 we\u2019ll be in touch.";
          form.reset();
        })
        .catch(function () {
          btn.disabled = false;
          msg.textContent = "Something went wrong. Please try again.";
        });
    });
  });
})();
