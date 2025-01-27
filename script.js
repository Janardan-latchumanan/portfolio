// Smooth Scroll on clicking navigation links
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Scroll to top with smooth scroll
document.querySelector('.navbar .home-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Get the button element
const backToTopButton = document.querySelector('.back-to-top');

// Add scroll event listener to show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add('show'); // Show the button
    } else {
        backToTopButton.classList.remove('show'); // Hide the button
    }
};

// Add click event listener to scroll to the top when button is clicked
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
});
