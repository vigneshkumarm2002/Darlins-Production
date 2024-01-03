
function openModal(content) {
  var modal = document.getElementById(content);
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// Function to close the modal
function closeModal(content) {
  var modal = document.getElementById(content);
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Close the modal when clicking outside the modal content
window.onclick = function (event) {
  var modals = document.getElementsByClassName("modal");
  for (var i = 0; i < modals.length; i++) {
    var modal = modals[i];
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
};



// function formatCurrentDateTime() {
//     const currentDateTimeInput = document.getElementById("currentDateTime");
//     const currentDate = new Date();
    
//     // Format date and time components
//     const day = currentDate.getDate().toString().padStart(2, "0");
//     const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
//     const year = currentDate.getFullYear().toString().slice(-2); // Get last 2 digits of the year
//     const hours = currentDate.getHours().toString().padStart(2, "0");
//     const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  
//     // Create the formatted date and time string
//     const formattedDateTime = `${day}/${month}/${year}  -  ${hours}:${minutes}`;
    
//     // Set the formatted date and time as the input value
//     currentDateTimeInput.value = formattedDateTime;
//   }

//   var form = document.getElementById('sheetdb-form');
//   form.addEventListener("submit", e => {
//     e.preventDefault();
//     formatCurrentDateTime();
  
//     var token = 'kaj5tnwjvlve7w1uax093ebvtmuxch7ek04nqqy0';
  
//     fetch(form.action, {
//       method: "POST",
//       headers: {
//         'Authorization': 'Bearer ' + token,
//       },
//       body: new FormData(document.getElementById("sheetdb-form")),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Something went wrong. Status: ' + response.status);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Success:', data);
//         // openModal();
//         clearForm(); // Call the function to clear form values
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         alert(error.message);
//       });
//   });
  

  

// // Event listener for the close button in the modal
// // document.getElementById("closeButton").addEventListener("click", closeModal);

// // Function to clear form values
// function clearForm() {
//   document.getElementById("sheetdb-form").reset(); // Reset the form
// }
