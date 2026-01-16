
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchMessage = document.getElementById("searchMessage");

searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (searchInput.value.trim() === "") {
        searchMessage.textContent = "Please enter something to search.";
        searchMessage.style.color = "red";
    } else {
        searchMessage.textContent = "Searching for: " + searchInput.value;
        searchMessage.style.color = "green";
    }
});


const username = document.getElementById("username");
const submitBtn = document.getElementById("submitBtn");
const errorMessage = document.getElementById("errorMessage");

username.addEventListener("input", function () {
    if (username.value.trim() === "") {
        submitBtn.disabled = true;
        errorMessage.textContent = "Name is required.";
    } else {
        submitBtn.disabled = false;
        errorMessage.textContent = "";
    }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    if (username.value.trim() === "") {
        errorMessage.textContent = "Form cannot be empty.";
    } else {
        alert("Form submitted successfully!");
        username.value = "";
        submitBtn.disabled = true;
    }
});
