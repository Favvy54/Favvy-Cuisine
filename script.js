// Display Dynamic Welcome Message
window.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    const today = new Date();
    const hours = today.getHours();

    if (hours < 12) {
        welcomeMessage.innerText = "Good Morning! Welcome to Favvy Cuisine.";
    } else if (hours < 18) {
        welcomeMessage.innerText = "Good Afternoon! Welcome to Favvy Cuisine.";
    } else {
        welcomeMessage.innerText = "Good Evening! Welcome to Favvy Cuisine.";
    }
});

// Show Alert when Button is Clicked
function thankUser() {
    alert('Thank you for visiting!');
}

// Form Submission Alert
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;

    if (name) {
        alert(`Thank you, ${name}! Your message has been received.`);
    } else {
        alert("Please fill out all fields.");
    }
})
