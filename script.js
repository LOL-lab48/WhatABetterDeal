// Detect project base dynamically
const pathParts = window.location.pathname.split("/");
const projectBase = "/" + (pathParts[1] || ""); // "/WhatABetterDeal"

// Open modal and update URL
function openModal(id, slug) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = 'flex';
  // Use hash URL inside project folder
  location.hash = "item-" + slug; // #item-pool or #item-kids-bike
}

// Close modal and reset URL
function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = 'none';
  location.hash = ""; // resets URL back to project root
}

// Handle back/forward buttons
window.addEventListener("hashchange", () => {
  const hash = location.hash;

  document.querySelectorAll(".modal").forEach(modal => modal.style.display = 'none');

  if (hash === "#item-pool") document.getElementById("modal1").style.display = 'flex';
  if (hash === "#item-kids-bike") document.getElementById("modal2").style.display = 'flex';
});

// Open modal if hash exists on page load
window.addEventListener("load", () => {
  const hash = location.hash;
  if (hash === "#item-pool") document.getElementById("modal1").style.display = 'flex';
  if (hash === "#item-kids-bike") document.getElementById("modal2").style.display = 'flex';
});

// Close modal when clicking outside content
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(modal.id);
  });
});

// Close modal on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal").forEach(modal => modal.style.display = 'none');
    location.hash = "";
  }
});
