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
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website'
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
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
  cardName.textContent = worksData[i].name;
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