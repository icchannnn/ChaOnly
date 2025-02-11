document.getElementById('yes').addEventListener('click', function () {
    // 🎆 Fireworks Effect
    confetti({
        particleCount: 300,
        spread: 150,
        scalar: 2,
        origin: { y: 0.6 },
    });

    const popup = document.getElementById("popup");
    const container = document.querySelector(".container"); // The main container
    const closeBtn = document.querySelector(".close");

    // Function to show the popup and hide the container
    function showPopup() {
        popup.style.display = "block";
        container.classList.add("hidden"); // Hide the background container
    }

    // Function to close the popup and show the container again
    function closePopup() {
        popup.style.display = "none";
        container.classList.remove("hidden"); // Show the container back
    }

    // Add event listener for clicking "Yes" button to show the popup
    document.getElementById("yes").addEventListener("click", showPopup);

    // Add event listener for the close button
    closeBtn.addEventListener("click", closePopup);

});

// Close Popup ❌
document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});

let currentImageIndex = 0;
const images = ["1st.jpg", "2nd.jpg", "her.jpg", "her1.jpg", "her2.jpg", "her3.jpg", "her4.jpg", "her5.jpg"];

const popupImg = document.querySelector(".popup-img");

// Show first message
popupImg.src = images[currentImageIndex];

document.getElementById("next").addEventListener("click", function (event) {
    event.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % images.length;
    popupImg.src = images[currentImageIndex];
    confetti({ particleCount: 100, spread: 120 });
});

document.getElementById("prev").addEventListener("click", function (event) {
    event.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    popupImg.src = images[currentImageIndex];
    confetti({ particleCount: 100, spread: 120 });
});

function createHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random fall speed
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

document.getElementById('yes').addEventListener('click', function () {
    setInterval(createHeart, 200);
});


document.getElementById('yes').addEventListener('click', function () {
    setInterval(createHeart, 300);
});

// 🏃‍♂️ "No" Button Runs Away when hovered
let noBtn = document.getElementById('no');

noBtn.addEventListener('mouseenter', function () {
    setTimeout(() => {
        let maxX = window.innerWidth - noBtn.clientWidth - 20;
        let maxY = window.innerHeight - noBtn.clientHeight - 20;

        let randomX = Math.max(20, Math.random() * maxX);
        let randomY = Math.max(20, Math.random() * maxY);

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    }, 100); // Small delay to allow a chance to click before moving
});


// Button Growth Feature (Keeps from original)
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('no').addEventListener('click', function () {
        let yesBtn = document.getElementById('yes');
        let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 5) + "px";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let noClickCount = 0;
    let noBtn = document.getElementById("no");

    noBtn.addEventListener("click", () => {
        noClickCount++;
        if (noClickCount >= 3) {
            noBtn.style.animation = "explode 0.5s forwards";
            setTimeout(() => { noBtn.remove(); }, 500);
        }
    });
});



document.addEventListener("mousemove", function (e) {
    let heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.style.position = "absolute";
    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";
    heart.style.fontSize = "20px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "fade 1s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});



document.getElementById("yes").addEventListener("click", () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
});

// let speed = 1;
// const noButton = document.getElementById("no");
// const yesButton = document.getElementById("yes");

// // Ensure both buttons are positioned inline initially
// noButton.style.position = "relative";
// yesButton.style.position = "relative";

// // When hovering over the "No" button, it runs away but stays inside the screen
// noButton.addEventListener("mouseover", function () {
//     speed += 0.5;

//     let maxX = window.innerWidth - this.offsetWidth; // Max horizontal position
//     let maxY = window.innerHeight - this.offsetHeight; // Max vertical position

//     let x = Math.random() * (maxX - 50); // Keeping some space
//     let y = Math.random() * (maxY - 50);

//     this.style.position = "absolute"; // Change to absolute when moving
//     this.style.left = `${x}px`;
//     this.style.top = `${y}px`;
// });

const songs = ["ifly.mp3", "lover.mp3"];
let currentSongIndex = 0;
const audio = document.getElementById("love-song");

document.querySelector(".kuromi-gif").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play().catch(err => console.log("Error playing music:", err));
});


document.querySelector(".kuromi-gif").addEventListener("click", () => {
    audio.volume = 0; // Start at 0 volume
    audio.play();

    let fadeIn = setInterval(() => {
        if (audio.volume < 1) {
            audio.volume += 0.1; // Gradually increase volume
        } else {
            clearInterval(fadeIn);
        }
    }, 200);
});


let secretInput = "";
const inputBox = document.getElementById("secret-input");

document.addEventListener("keydown", (e) => {
    inputBox.focus(); // Keep input field active
    secretInput += e.key.toLowerCase();

    if (secretInput.includes("i love you")) {
        alert("I love you too!!💖");
        secretInput = ""; // Reset input after unlocking
        inputBox.value = ""; // Clear the hidden input
    }
});



function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    let xPos = Math.random() * window.innerWidth;
    heart.style.left = `${xPos}px`;

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

setInterval(createFloatingHeart, 500);

document.getElementById("no").addEventListener("click", () => {
    alert("Too bad, you're already mine! 😘");
});

