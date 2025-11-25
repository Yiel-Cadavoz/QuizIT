const scrollContainer = document.getElementById("scrollContainer");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

leftArrow.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
});
const programmingBox = document.getElementById("programmingbox");
const programmingModul = document.getElementById("programmingmodul");
const closeBtn = document.querySelector(".closebtn");

// Show the modal when clicking the programming box
programmingBox.addEventListener("click", () => {
  programmingModul.style.display = "flex";
});

// Close the modal when clicking the close button
closeBtn.addEventListener("click", () => {
  programmingModul.style.display = "none";
});

// Optional: Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === programmingModul) {
    programmingModul.style.display = "none";
  }
});



