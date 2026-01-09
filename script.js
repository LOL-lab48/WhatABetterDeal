// Open item modal by ID
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

// Close item modal by ID
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Open ad modal by ID
function openAdModal(id) {
  openModal(id);
}

// Show thank you message after form submission
document.querySelector("form").addEventListener("submit", function () {
  setTimeout(() => {
    document.getElementById("thankYouMessage").style.display = "block";
  }, 200);
});


