// -----------------------------
// Open modal and change URL
// -----------------------------
function openModal(id, slug) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = 'flex';
  // Use hash URL instead of /item/slug
  location.hash = "item-" + slug;
}

// -----------------------------
// Close modal and reset URL
// -----------------------------
function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = 'none';
  // Clear the hash
  if(location.hash.startsWith("#item-")) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
}

// -----------------------------
// Handle back/forward buttons (hashchange)
// -----------------------------
window.addEventListener("hashchange", function() {
  const hash = location.hash;

  // Hide all modals first
  document.querySelectorAll(".modal").forEach(modal => {
    modal.style.display = 'none';
  });

  // Show the modal based on hash
  if (hash === "#item-pool") {
    document.getElementById("modal1").style.display = 'flex';
  } else if (hash === "#item-kids-bike") {
    document.getElementById("modal2").style.display = 'flex';
  }
});

// -----------------------------
// Open modal if hash exists on page load
// -----------------------------
window.addEventListener("load", function() {
  const hash = location.hash;
  if (hash === "#item-pool") {
    document.getElementById("modal1").style.display = 'flex';
  } else if (hash === "#item-kids-bike") {
    document.getElementById("modal2").style.display = 'flex';
  }
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
// Close modal when pressing ESC
// -----------------------------
document.addEventListener("keydown", function(e) {
  if(e.key === "Escape") {
    document.querySelectorAll(".modal").forEach(modal => modal.style.display = 'none');
    if(location.hash.startsWith("#item-")) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  }
});

// -----------------------------
// Show thank-you message after form submission
// -----------------------------
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function(e) {
    setTimeout(() => {
      const message = form.querySelector("#thankYouMessage");
      if (message) message.style.display = 'block';
    }, 200);
  });
});
