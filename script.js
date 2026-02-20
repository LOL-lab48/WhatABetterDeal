// Determine base path dynamically
const pathParts = window.location.pathname.split("/");
const projectBase = "/" + (pathParts[1] || ""); // "/WhatABetterDeal"

// -----------------------------
// Open modal and change URL
// -----------------------------
function openModal(id, slug) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = 'flex';
  // Include project base
  history.pushState({ modal: id }, "", projectBase + "/#" + "item-" + slug);
}

// -----------------------------
// Close modal and reset URL
// -----------------------------
function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = 'none';
  // Reset to homepage inside project
  history.pushState({}, "", projectBase + "/");
}

// -----------------------------
// Handle back/forward buttons (hashchange)
// -----------------------------
window.addEventListener("hashchange", function() {
  const hash = location.hash;

  document.querySelectorAll(".modal").forEach(modal => modal.style.display = 'none');

  if (hash === "#item-pool") document.getElementById("modal1").style.display = 'flex';
  else if (hash === "#item-kids-bike") document.getElementById("modal2").style.display = 'flex';
});

// -----------------------------
// Open modal if hash exists on page load
// -----------------------------
window.addEventListener("load", function() {
  const hash = location.hash;
  if (hash === "#item-pool") document.getElementById("modal1").style.display = 'flex';
  else if (hash === "#item-kids-bike") document.getElementById("modal2").style.display = 'flex';
});

// -----------------------------
// Close modal when clicking outside content
// -----------------------------
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(modal.id);
  });
});

// -----------------------------
// Close modal on ESC
// -----------------------------
document.addEventListener("keydown", function(e) {
  if(e.key === "Escape") {
    document.querySelectorAll(".modal").forEach(modal => modal.style.display = 'none');
    history.pushState({}, "", projectBase + "/");
  }
});

// -----------------------------
// Show thank-you message after form submission
// -----------------------------
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function(e) {
    setTimeout(() => {
      const message = form.querySelector("#thankYouMessage");
      if (message) message.style.display='block';
    }, 200);
  });
});
