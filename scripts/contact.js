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

function formatCurrentDateTime() {
  const currentDateTimeInput = document.getElementById("currentDateTime");
  const currentDate = new Date();
  
  // Format date and time components
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear().toString().slice(-2); // Get last 2 digits of the year
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");

  // Create the formatted date and time string
  const formattedDateTime = `${day}/${month}/${year}  -  ${hours}:${minutes}`;
  
  // Set the formatted date and time as the input value
  currentDateTimeInput.value = formattedDateTime;
}

var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  formatCurrentDateTime() 
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then(() => {
      openModal();
      clearForm(); // Call the function to clear form values
    });
});

// Event listener for the close button in the modal
document.getElementById("closeButton").addEventListener("click", closeModal);

// Function to clear form values
function clearForm() {
  document.getElementById("sheetdb-form").reset(); // Reset the form
}
