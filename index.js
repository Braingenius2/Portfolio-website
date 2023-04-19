// Get the hamburgerButton, closeButton and mobileMenu
hamburgerButton = document.querySelector('#hamburger-icon');
closeButton = document.querySelector('#menu-close');
mobileMenu = document.getElementById('mobile-menu');

// Add click event listeners to the hamburgerButton and closeButton
hamburgerButton.addEventListener('click', function() {
    //toggle the display of the mobile menu
    mobileMenu.style.display = 'block';
});
closeButton.addEventListener('click', function() {
    //toggle the display of the mobile menu
    mobileMenu.style.display = 'none';
});

// Add click event listeners to the mobile menu links
mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      // Hide the mobile menu after a link is clicked
      mobileMenu.style.display = 'none';
    });
  });


