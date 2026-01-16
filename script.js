// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    document.body.style.overflow =
        navLinks.classList.contains("show") ? "hidden" : "auto";
});

// Search
document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const value = document.getElementById("searchInput").value;

    document.getElementById("message").innerText =
        value ? `You searched: ${value}` : "Please enter something";
});

// Form Validation
const nameInput = document.getElementById("name");
const submitBtn = document.getElementById("submitBtn");
const errorMsg = document.getElementById("errorMsg");

nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() === "") {
        submitBtn.disabled = true;
        errorMsg.innerText = "Name is required";
    } else {
        submitBtn.disabled = false;
        errorMsg.innerText = "";
    }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form Submitted Successfully!");
});
