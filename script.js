
const form = document.getElementById("form");
const countdownForm = document.getElementById("countdown-form");
const mainCountdown = document.getElementById("countdown");
const resetButton = document.getElementById("reset-button");
const completeScreen = document.getElementById("countdown-complete");
const newCountdownButton = document.getElementById("new-countdown-button");

const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");
const countdownTitle = document.getElementById("countdown-title");
const completeTitle = document.getElementById("complete-title");

const backgroundInput = document.getElementById("countdown-background");
const videoBg = document.getElementById("video-background");
const imageBg = document.getElementById("image-background");
const backgroundContainer = document.querySelector(".background-container"); 


let countdownInterval;

// Ensure only the form is visible at the start
window.onload = function () {
    form.style.display = "flex";
    mainCountdown.style.display = "none";
    completeScreen.style.display = "none";
};

// File Upload for Background
backgroundInput.addEventListener("change", function(event) {
    const file = event.target.files[0];

    if (!file) {
        return; 
    }

    const fileURL = URL.createObjectURL(file);

    if (file.type.includes("video")) {
        videoBg.src = fileURL;
        videoBg.style.display = "block";
        imageBg.style.display = "none";
        backgroundContainer.style.backgroundColor = "transparent";
    } else if (file.type.includes("image")) {
        imageBg.src = fileURL;
        imageBg.style.display = "block";
        videoBg.style.display = "none";
        backgroundContainer.style.backgroundColor = "transparent";
    }
});

// Start countdown
countdownForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("countdown-title-input").value;
    // Set the title to the title input value or default to "Countdown Timer"
    countdownTitle.innerHTML = title ? title : "Countdown Timer";

    const targetDate = new Date(document.getElementById("countdown-date").value).getTime();

    // Get the user-selected font color and size
    let fontColor = document.getElementById("font-color").value;
    let fontSize = document.getElementById("font-size").value;

    // Check if user entered/ changed the color and size
    if (fontColor === "#000000" || fontColor === "") {
        fontColor = "#ffffff"; // Default to white
    }
    if (!fontSize) {
        fontSize = "24"; // Default to 24px if empty or too small
    }
    
    fontSize += "px";

    // Apply the font color and size to the countdown-container text
    document.querySelectorAll(".countdown-container *:not(#reset-button), .complete-title").forEach(function(element) {
        element.style.color = fontColor;
        element.style.fontSize = fontSize;
    });


    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Hide form and show countdown timer
    form.style.display = "none";
    mainCountdown.style.display = "flex";
    completeScreen.style.display = "none";

    function startCountdown() {
        const currentDate = new Date().getTime();
        const difference = targetDate - currentDate;

        if (difference <= 0) {
            clearInterval(countdownInterval);
            mainCountdown.style.display = "none";
            completeScreen.style.display = "flex";
            completeTitle.innerHTML = "Countdown Complete!";
            return;
        }

        // Calculate remaining days, hours, minutes, and seconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        // Display the remaining time
        Days.innerHTML = days < 10 ? "0" + days : days;
        Hours.innerHTML = hours < 10 ? "0" + hours : hours;
        Minutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        Seconds.innerHTML = seconds < 10 ? "0" + seconds : seconds; 
    }

    // Update the countdown every second
    startCountdown();
    countdownInterval = setInterval(startCountdown, 1000);
});

// Reset Button: Clear Countdown and Show Form
resetButton.addEventListener("click", function () {
    clearInterval(countdownInterval);
    form.style.display = "flex";
    mainCountdown.style.display = "none";
    completeScreen.style.display = "none";
    backgroundInput.value = "";
});

// New Countdown Button: Show Form and Hide Countdown Complete Screen
newCountdownButton.addEventListener("click", function () {
    completeScreen.style.display = "none";
    form.style.display = "flex";
});
