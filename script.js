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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("statusMessage");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch("https://formsubmit.co/quizit.inc@gmail.com", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                status.innerHTML = "Thank you! Your message has been sent.";
                form.reset();
            } else {
                status.innerHTML = "Something went wrong. Please try again.";
            }
        })
        .catch(error => {
            status.innerHTML = "Failed to send message. Please check your connection.";
        });
    });
});



