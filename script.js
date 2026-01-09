function openModal(id) {
  document.getElementById(id).style.display='flex';
}
function closeModal(id) {
  document.getElementById(id).style.display='none';
}

// Show thank you message after form submission
document.querySelector("form").addEventListener("submit", function(){
  setTimeout(()=>{document.getElementById('thankYouMessage').style.display='block';}, 200);
});
