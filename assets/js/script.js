// JS for Profession 

let profession = document.querySelector('#profession')
let professionAssist = document.querySelector('#professionAssist')
let currentIndex = 0;

let titles = [
   "Spiderman fan",
   "UI/UX Designer",
   "Graphic Designer",
    "Front-end"
    
]

let titleAssist = [
    "since childhood",
    "by the day",
    "whenever the universe demands",
    "rookie"   
]

function changeProfession() {
    currentIndex = (currentIndex + 1) % titles.length;
    profession.textContent = titles[currentIndex];
    professionAssist.textContent = titleAssist[currentIndex];

    setTimeout(changeProfession, 2000);
}

changeProfession();


// Hero Section Image change
const imgDiv = document.querySelector('.myImgDiv img');

// Store your two image URLs for toggling
const defaultImage = './assets/media/img/heroImg/Photo.png';
const clickedImage = './assets/media/img/heroImg/Photo2.png';  // The new image after click

imgDiv.addEventListener('click', () => {
    imgDiv.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    imgDiv.style.opacity = '0';  // Start fade-out animation

    // Wait for the fade-out animation to complete before changing the image
    setTimeout(() => {
        imgDiv.src = imgDiv.src === defaultImage ? clickedImage : defaultImage;
        imgDiv.style.opacity = '1';  // Fade in the new image
    }, 500);  // This timing should match your CSS transition duration
});




//JS for Email copy
function copyToClipboard() {
    // Get the email address text
    var email = document.getElementById("email").innerText;

    // Create a temporary input element to copy the text from
    var tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Show confirmation message
    var message = document.getElementById("message");
    message.style.display = "block";

    // Hide the message after 2 seconds
    setTimeout(function () {
        message.style.display = "none";
    }, 2000);
}


// Function to add/remove shadow on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.classList.add('shadow'); // Add shadow when scrolling
    } else {
        header.classList.remove('shadow'); // Remove shadow when at the top
    }
});


// Project filter
let AllProject = document.querySelector('#All');
let GD = document.querySelector('#GD');
let UX = document.querySelector('#UX');
let Live = document.querySelector('#Live');

let AllCard = document.querySelectorAll('.cardDisplay'); // Select all project cards
let UXproject = document.querySelectorAll('.UXProject'); // UX projects
let GDproject = document.querySelectorAll('.GDproject'); // GD projects
let LiveProject = document.querySelectorAll('.LiveProject'); // Live projects

function resetTabColor() {
    AllProject.style.backgroundColor = '#ffffff';
    GD.style.backgroundColor = '#ffffff';
    UX.style.backgroundColor = '#ffffff';
    Live.style.backgroundColor = '#ffffff';
    Live.style.color = '#1c1c1c'
}

// Function to show all projects
function showAll() {
    AllCard.forEach(project => {
        project.style.display = 'flex'; // Ensure that display is set to 'flex' to maintain layout
    });

    resetTabColor()
    AllProject.style.backgroundColor = '#FFB703'
}

// Function to show only UX projects
function showUX() {
    GDproject.forEach(project => {
        project.style.display = 'none'; // Show only GD projects
    });

    LiveProject.forEach(project => {
        project.style.display = 'none'; // Show only Live projects
    });
    

    UXproject.forEach(project => {
        project.style.display = 'flex'; // Show only UX projects
    });

    resetTabColor()
    UX.style.backgroundColor = '#53CCA0'
}

// Function to show only GD projects
function showGD() {
    AllCard.forEach(project => {
        project.style.display = 'none'; // Hide all projects
    });

    GDproject.forEach(project => {
        project.style.display = 'flex'; // Show only GD projects
    });

    resetTabColor()
    GD.style.backgroundColor = '#219ebc'
}

// Function to show only Live projects
function showLive() {
    AllCard.forEach(project => {
        project.style.display = 'none'; // Hide all projects
    });

    LiveProject.forEach(project => {
        project.style.display = 'flex'; // Show only Live projects
    });

    resetTabColor()
    Live.style.backgroundColor = '#5f0f40'
    Live.style.color = '#ffffff'
}

// Add event listeners to tabs
AllProject.addEventListener('click', showAll);
GD.addEventListener('click', showGD);
UX.addEventListener('click', showUX);
Live.addEventListener('click', showLive);

// Initialize with all projects visible
showAll();
