// Get the hamburgerButton, closeButton and mobileMenu
const hamburgerButton = document.querySelector('#hamburger-icon');
const closeButton = document.querySelector('#menu-close');
const mobileMenu = document.getElementById('mobile-menu');

// Add click event listeners to the hamburgerButton and closeButton
hamburgerButton.addEventListener('click', () => {
  // toggle the display of the mobile menu
  mobileMenu.style.display = 'block';
});
closeButton.addEventListener('click', () => {
  // toggle the display of the mobile menu
  mobileMenu.style.display = 'none';
});

// Add click event listeners to the mobile menu links
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    // Hide the mobile menu after a link is clicked
    mobileMenu.style.display = 'none';
  });
});

let works = [
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  }
];