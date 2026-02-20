<script>
// -----------------------------
// Open modal and change URL
// -----------------------------
function openModal(id, slug) {
  document.getElementById(id).style.display = 'flex';

  // Change URL to /item/ITEM-NAME-HERE without reloading
  history.pushState({ modal: id }, "", "/item/" + slug);
}

// -----------------------------
// Close modal and reset URL
// -----------------------------
function closeModal(id) {
  document.getElementById(id).style.display = 'none';

  // Reset URL to homepage
  history.pushState({}, "", "/");
}

// -----------------------------
// Handle back/forward buttons
// -----------------------------
window.onpopstate = function() {
  document.querySelectorAll(".modal").forEach(modal => {
    modal.style.display = "none";
  });
};

// -----------------------------
// Open modal if user visits direct link
// -----------------------------
window.addEventListener("load", function() {
  const pathParts = window.location.pathname.split("/");

  // If URL looks like /item/ITEM-NAME
  if (pathParts.length >= 3 && pathParts[1] === "item") {
    const slug = pathParts[2];
    if (slug === "pool") {
      document.getElementById("modal1").style.display = "flex";
    } else if (slug === "kids-bike") {
      document.getElementById("modal2").style.display = "flex";
    }
  }
});

// -----------------------------
// Show thank-you message after form submission
// -----------------------------
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function(e){
    setTimeout(()=>{
      const message = form.querySelector("#thankYouMessage");
      if (message) message.style.display='block';
    }, 200);
  });
});
</script>



