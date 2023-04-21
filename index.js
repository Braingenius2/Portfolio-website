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

// Create a JavaScript array to store all of the information for all projects
let worksData = [
  {
    name: ["Multi-Post Stories Gain+Glory", "Keeping track of hundreds of components"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/featured-image-mobile.svg',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: ["Multi-Post Stories Gain+Glory", "Keeping track of hundreds of components"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/featured-image-mobile.svg',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: ["Multi-Post Stories Gain+Glory", "Keeping track of hundreds of components"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/featured-image-mobile.svg',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: ["Multi-Post Stories Gain+Glory", "Keeping track of hundreds of components"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/featured-image-mobile.svg',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: ["Multi-Post Stories Gain+Glory", "Keeping track of hundreds of components"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/featured-image-mobile.svg',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: ["Multi-Post Stories Gain+Glory", "Keeping track of hundreds of components"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/featured-image-mobile.svg',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  }
];

// Dynamically create works section using the information stored in the works array
const works = document.getElementById('works');
const worksText = document.createElement('div');
worksText.setAttribute('class', 'text');
let textContent = `<h2>My Recent Works</h2>
                    <hr class="indicator">`;
worksText.innerHTML = textContent;
works.appendChild(worksText)

const cardWorkRow = document.createElement('div');
cardWorkRow.setAttribute('class', 'card-work-row');
works.appendChild(cardWorkRow);

// loop through worksData to create cards in the grid
for (let i = 0; i < worksData.length; i++) {
  const card = document.createElement('article');
  card.setAttribute('class', 'card');
  cardWorkRow.appendChild(card);

  const imgPlaceholder = document.createElement('figure');
  imgPlaceholder.setAttribute('class', 'img-placeholder');
  card.appendChild(imgPlaceholder);
  let figureContent = `<img src="" alt="">
                        <figcaption></figcaption>`;
  imgPlaceholder.innerHTML = figureContent;

  const cardText = document.createElement('div');
  cardText.setAttribute('class', 'text');
  card.appendChild(cardText);

  const cardName = document.createElement('h3');
  cardName.textContent = worksData[i].name[0];
  cardText.appendChild(cardName);

  const tags = document.createElement('ul');
  tags.classList.add('tags');

  for (let j = 0; j < 4; j++) {
    const tagItem = document.createElement('li');
    tagItem.textContent = worksData[i].technologies[j];
    tags.appendChild(tagItem);
  };

  cardText.appendChild(tags);
  
  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('see-project');
  seeProjectButton.innerHTML = `See project`;
  cardText.appendChild(seeProjectButton);
};

// Define function to dynamically generate popup
function generatePopup() {
  // select the works section
const works = document.querySelector('#works');

// create the mobile-popup container
const mobilePopup = document.createElement('div');
mobilePopup.classList.add('mobile-popup');

// create the card-works container
const cardWorks = document.createElement('div');
cardWorks.classList.add('card-works');

// create the featured-image figure
const featuredImage = document.createElement('figure');
featuredImage.classList.add('featured-image');
const img1 = document.createElement('img');
img1.id = 'img1';
img1.src = worksData[0].featuredImageMobile;
img1.alt = 'project image';
featuredImage.appendChild(img1);

// create the primary container
const primary = document.createElement('div');
primary.classList.add('primary');
const h3 = document.createElement('h3');
h3.textContent = worksData[0].name[1];
primary.appendChild(h3);

// create the tags container
const tags = document.createElement('ul');
tags.classList.add('tags');
for (let i = 0; i < 3; i++) {
  const tag = document.createElement('li');
  tag.classList.add('tag');
  tag.textContent = worksData[0].technologies[i];
  tags.appendChild(tag);
};
primary.appendChild(tags);

// create the secondary container
const secondary = document.createElement('p');
secondary.classList.add('secondary');
secondary.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.";
cardWorks.appendChild(featuredImage);
cardWorks.appendChild(primary);
cardWorks.appendChild(secondary);

// create the action container
const action = document.createElement('div');
action.classList.add('action');
const seeLiveButton = document.createElement('button');
seeLiveButton.classList.add('see-live');
seeLiveButton.type = 'button';
const seeLiveSpan = document.createElement('span');
seeLiveSpan.textContent = 'See live';
const seeLiveImg = document.createElement('img');
seeLiveImg.src = 'images/see-live-icon.svg';
seeLiveImg.alt = 'see live icon';
seeLiveButton.appendChild(seeLiveSpan);
seeLiveButton.appendChild(seeLiveImg);
const seeSourceButton = document.createElement('button');
seeSourceButton.classList.add('see-source');
seeSourceButton.type = 'button';
const seeSourceSpan = document.createElement('span');
seeSourceSpan.textContent = 'See source';
const seeSourceImg = document.createElement('img');
seeSourceImg.src = 'images/see-source-icon.svg';
seeSourceImg.alt = 'see source icon github';
seeSourceButton.appendChild(seeSourceSpan);
seeSourceButton.appendChild(seeSourceImg);
action.appendChild(seeLiveButton);
action.appendChild(seeSourceButton);
cardWorks.appendChild(action);

// append the card-works container to the mobile-popup container
mobilePopup.appendChild(cardWorks);

// create the overlay div
const overlay = document.createElement('div');
overlay.classList.add('overlay');

// append the mobile-popup and overlay to the works section
works.appendChild(mobilePopup);
mobilePopup.appendChild(overlay);

};