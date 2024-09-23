// JS for Profession 

let profession = document.querySelector('#profession')
let professionAssist = document.querySelector('#professionAssist')
let currentIndex = 0;

let titles = [
    "UI/UX Designer",
    "Graphic Designer",
    "Front-end",
    "Movie Buff",
    "Spiderman fan"
]

let titleAssist = [
    "by the day",
    "whenever the universe demands",
    "rookie",
    "at any given time",
    "since my childhood",
]

function changeProfession() {
    currentIndex = (currentIndex + 1) % titles.length;
    profession.textContent = titles[currentIndex];
    professionAssist.textContent = titleAssist[currentIndex];

    setTimeout(changeProfession, 2000);
}

changeProfession();

//JS for Image change

let

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