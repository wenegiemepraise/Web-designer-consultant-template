// Select the form heading element
const formHeading = document.querySelector(".form-heading");

// Select all input fields in the contact form
const formInputs = document.querySelectorAll(".contact-form-input");

// Add event listeners to input fields for focus and blur events
formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      // Change the form heading text to reflect the input placeholder
      formHeading.textContent = `Your ${input.placeholder}`;
      // Show the form heading
      formHeading.style.opacity = "1";
    }, 300); // Delay for smooth transition
  });

  // Event listener for when input field loses focus
  input.addEventListener("blur", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      // Reset the form heading text to default
      formHeading.textContent = "Contact Me!";
      // Show the form heading
      formHeading.style.opacity = "1";
    }, 300); // Delay for smooth transition
  });
});

// Function to send email
function sendEmail() {
  // Get values from form fields
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const name = document.getElementById("name").value.trim();
  const subject = document.getElementById("subject").value.trim();

  // Check if any of the fields are empty
  if (!email || !message || !name || !subject) {
    // Display alert if any field is empty
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";
    alertBox.textContent = "Please fill out all fields.";
    document.body.appendChild(alertBox);
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 2000); // Hide alert after 2 seconds
    return; // Stop execution if any field is empty
  }

  // Use SMTP.js library to send email
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "praisewenegieme29@gmail.com",
    Password: "2ED60C92DC83DC3502CFA46C51EFF2895643",
    SecureToken: "b4bcc3c2-224d-42b7-b3b9-36a5f2cb5f7b",
    To: "praisewenegieme29@gmail.com",
    From: "praisewenegieme29@gmail.com",
    Subject: "New Contact Form Enquiry",
    Body:
      "Message: " +
      message +
      "\nName: " +
      name +
      " Email: " +
      email +
      "\nSubject: " +
      subject,
  }).then(() => {
    // Display success message after email is sent
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";
    alertBox.textContent = "Message sent!";
    document.body.appendChild(alertBox);
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 2000); // Hide alert after 2 seconds

    // Reset the form after submission
    document.querySelector(".contact-form").reset();
  });
}
