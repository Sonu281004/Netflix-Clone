// Navbar CSS property on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Profile section redirecting
const profileIcon = document.querySelector(".profile-icon");
if (profileIcon) {
  profileIcon.addEventListener("click", () => {
    window.location.href = "profile-details.html";
  });
}

// Movie card hover scaling
const movieCards = document.querySelectorAll(".content-card");
movieCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
  
});


