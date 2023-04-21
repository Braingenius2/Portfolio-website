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
const worksData = [
  {
    name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website',
  },
  {
    name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website',
  },
  {
    name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website',
  },
  {
    name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website',
  },
  {
    name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website',
  },
  {
    name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website',
  },
];

// Dynamically create works section using the information stored in the works array
const works = document.getElementById('works');
const worksText = document.createElement('div');
worksText.setAttribute('class', 'text');
const textContent = `<h2>My Recent Works</h2>
                    <hr class="indicator">`;
worksText.innerHTML = textContent;
works.appendChild(worksText);

const cardWorkRow = document.createElement('div');
cardWorkRow.setAttribute('class', 'card-work-row');
works.appendChild(cardWorkRow);

// loop through worksData to create cards in the grid
for (let i = 0; i < worksData.length; i += 1) {
  const card = document.createElement('article');
  card.setAttribute('class', 'card');
  cardWorkRow.appendChild(card);

  const imgPlaceholder = document.createElement('figure');
  imgPlaceholder.setAttribute('class', 'img-placeholder');
  card.appendChild(imgPlaceholder);
  const figureContent = `<img src="" alt="">
                        <figcaption></figcaption>`;
  imgPlaceholder.innerHTML = figureContent;

  const cardText = document.createElement('div');
  cardText.setAttribute('class', 'text');
  card.appendChild(cardText);

  const cardName = document.createElement('h3');
  const title = worksData[i].name[0];
  cardName.textContent = title;
  cardText.appendChild(cardName);

  const tags = document.createElement('ul');
  tags.classList.add('tags');

  for (let j = 0; j < 4; j += 1) {
    const tagItem = document.createElement('li');
    tagItem.textContent = worksData[i].technologies[j];
    tags.appendChild(tagItem);
  }

  cardText.appendChild(tags);

  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('see-project');
  seeProjectButton.innerHTML = 'See project';
  cardText.appendChild(seeProjectButton);
}

// Define function to dynamically generate popup
function generatePopup() {
  // select the works section
  const card = document.querySelector('.card-work-row');

  // create and append the mobile-popup container
  const mobilePopup = document.createElement('div');
  mobilePopup.classList.add('mobile-popup');
  card.appendChild(mobilePopup);

  // // create and append the overlay div
  // const overlay = document.createElement('div');
  // overlay.classList.add('overlay');
  // mobilePopup.appendChild(overlay);

  // create and append the card-works container
  const cardWorks = document.createElement('div');
  cardWorks.classList.add('card-works');
  mobilePopup.appendChild(cardWorks);

  // create and append the featured-image figure
  const featuredImage = document.createElement('figure');
  featuredImage.classList.add('featured-image');
  const img1 = document.createElement('img');
  img1.id = 'img1';
  img1.src = worksData[0].featuredImageMobile;
  img1.alt = 'project image';
  featuredImage.appendChild(img1);
  cardWorks.appendChild(featuredImage);

  // create and append the primary container
  const primary = document.createElement('div');
  primary.classList.add('primary');
  cardWorks.appendChild(primary);
  const h3 = document.createElement('h3');
  const h3Content = worksData[0].name[1];
  h3.textContent = h3Content;
  primary.appendChild(h3);

  // create and append the tags container
  const tags = document.createElement('ul');
  tags.classList.add('tags');
  for (let i = 0; i < 3; i += 1) {
    const tag = document.createElement('li');
    tag.classList.add('tag');
    tag.textContent = worksData[0].technologies[i];
    tags.appendChild(tag);
  }
  primary.appendChild(tags);

  // create and append the secondary container
  const secondary = document.createElement('p');
  secondary.classList.add('secondary');
  secondary.innerHTML = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`;
  cardWorks.appendChild(secondary);

  // create and append the action container
  const action = document.createElement('div');
  action.classList.add('action');
  cardWorks.appendChild(action);
  const seeLiveButton = document.createElement('button');
  seeLiveButton.classList.add('see-live');
  seeLiveButton.type = 'button';
  action.appendChild(seeLiveButton);
  const seeLiveSpan = document.createElement('span');
  seeLiveSpan.textContent = 'See live';
  seeLiveButton.appendChild(seeLiveSpan);
  const seeLiveImg = document.createElement('img');
  seeLiveImg.src = 'images/see-live-icon.svg';
  seeLiveImg.alt = 'see live icon';
  seeLiveButton.appendChild(seeLiveImg);
  const seeSourceButton = document.createElement('button');
  seeSourceButton.classList.add('see-source');
  seeSourceButton.type = 'button';
  action.appendChild(seeSourceButton);
  const seeSourceSpan = document.createElement('span');
  seeSourceSpan.textContent = 'See source';
  seeSourceButton.appendChild(seeSourceSpan);
  const seeSourceImg = document.createElement('img');
  seeSourceImg.src = 'images/see-source-icon.svg';
  seeSourceImg.alt = 'see source icon github';
  seeSourceButton.appendChild(seeSourceImg);
}

// Add click event listeners to the see-project buttons
document.querySelectorAll('.see-project').forEach((button) => {
  button.addEventListener('click', generatePopup);
});