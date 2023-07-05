emailjs.init('70ILZAWx2lIXiOtyA');

// Get references to the modal, overlay, and body
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const body = document.body;

// Function to open the modal
function openModal() {
  modal.style.display = "block";
  overlay.style.display = "block";
  body.classList.add("modal-open");
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
  body.classList.remove("modal-open");
}

// Event listener for form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the form data
  var formData = new FormData(event.target);

  // Prepare the email template parameters
  var templateParams = {
    from_name: formData.get("name"),
    from_email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message")
  };

  // Send the email using EmailJS
  emailjs.send("service_5er5azl", "template_mt6h3zv", templateParams)
    .then(function(response) {
      console.log("Email sent successfully!", response.status, response.text);
      // Do any additional actions you want after the email is sent

      // Reset the form values
      event.target.reset();

      // Display the modal
      openModal();
    })
    .catch(function(error) {
      console.error("Error sending email:", error);
      // Handle any errors that occurred during sending the email
    });
});

// Event listener for the close button in the modal
document.getElementById("closeButton").addEventListener("click", closeModal);