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
    technologies: [['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'], ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen']],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website',
  },
  {
    name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: [['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'], ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen']],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website',
  },
  {
    name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: [['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'], ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen']],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website',
  },
  {
    name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: [['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'], ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen']],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website',
  },
  {
    name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: [['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'], ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen']],
    liveVersionLink: 'https://braingenius2.github.io/Portfolio-website/project1',
    sourceLink: 'https://github.com/Braingenius2/Portfolio-website',
  },
  {
    name: ['Multi-Post Stories Gain+Glory', 'Keeping track of hundreds of components'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    featuredImageMobile: 'images/Snapshoot-Portfolio-mobile.png',
    featuredImageDesktop: 'images/Snapshoot-Portfolio-desktop.png',
    technologies: [['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'], ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen']],
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

  worksData[0].technologies[0].forEach((technology) => {
    const tagItem = document.createElement('li');
    tagItem.textContent = technology;
    tags.appendChild(tagItem);
  });

  cardText.appendChild(tags);

  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('see-project');
  seeProjectButton.innerHTML = 'See project';
  cardText.appendChild(seeProjectButton);
}

// Define function to dynamically generate popup
function generatePopup() {
  // created Elements
  const mobilePopup = document.createElement('div');
  mobilePopup.classList.add('mobile-popup');
  const cardWorks = document.createElement('div');
  cardWorks.classList.add('card-works');
  const featuredImage = document.createElement('figure');
  const primary = document.createElement('div');
  primary.classList.add('primary');
  const h3 = document.createElement('h3');
  const tags = document.createElement('ul');
  const secondary = document.createElement('p');
  secondary.classList.add('secondary');
  const action = document.createElement('div');
  action.classList.add('action');
  const seeLiveButton = document.createElement('button');
  seeLiveButton.classList.add('see-live');
  seeLiveButton.type = 'button';
  const seeLiveSpan = document.createElement('span');
  seeLiveSpan.classList.add('see');
  seeLiveSpan.textContent = 'See live';
  const seeLiveImg = document.createElement('img');
  seeLiveImg.src = 'images/see-live-icon.svg';
  seeLiveImg.alt = 'see live icon';
  const seeSourceButton = document.createElement('button');
  seeSourceButton.classList.add('see-source');
  seeSourceButton.type = 'button';
  const seeSourceSpan = document.createElement('span');
  seeSourceSpan.classList.add('see');
  seeSourceSpan.textContent = 'See source';
  const seeSourceImg = document.createElement('img');
  seeSourceImg.src = 'images/see-source-icon.svg';
  seeSourceImg.alt = 'see source icon github';

  // select the works section
  const card = document.querySelector('.card-work-row');

  // append the popup container
  card.appendChild(mobilePopup);

  if (window.innerWidth > 768) {
    const closePopupDesktop = document.createElement('img');
    closePopupDesktop.src = 'images/cancel-popup-desktop.png';
    closePopupDesktop.classList.add('close-popup-desktop');
    mobilePopup.appendChild(closePopupDesktop);
  }
  mobilePopup.appendChild(cardWorks);
  featuredImage.classList.add('featured-image');
  const img1 = document.createElement('img');
  img1.id = 'img1';

  if (window.innerWidth < 768) { // Select image for mobile screen
    img1.src = worksData[0].featuredImageMobile;
    img1.alt = 'project image';
    const img2 = document.createElement('img');
    img2.classList.add('cancel_abs');
    img2.src = 'images/cancel-popup-mobile.png';
    featuredImage.appendChild(img1);
    featuredImage.appendChild(img2);
  } else { // Select image for desktop screen
    img1.src = worksData[0].featuredImageDesktop;
    img1.alt = 'project image';
    featuredImage.appendChild(img1);
  }
  cardWorks.appendChild(featuredImage);

  // peculiar design for mobile
  if (window.innerWidth < 768) {
    // append the primary container
    cardWorks.appendChild(primary);
    const h3Content = worksData[0].name[1];
    h3.textContent = h3Content;
    primary.appendChild(h3);

    // append the tags container
    tags.classList.add('tags');
    for (let i = 0; i < 3; i += 1) {
      const tag = document.createElement('li');
      tag.classList.add('tag');
      tag.textContent = worksData[0].technologies[0][i];
      tags.appendChild(tag);
    }
    primary.appendChild(tags);

    // append the secondary container
    secondary.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.';
    cardWorks.appendChild(secondary);

    // append the action container
    cardWorks.appendChild(action);
    action.appendChild(seeLiveButton);
    seeLiveButton.appendChild(seeLiveSpan);
    seeLiveButton.appendChild(seeLiveImg);
    action.appendChild(seeSourceButton);
    seeSourceButton.appendChild(seeSourceSpan);
    seeSourceButton.appendChild(seeSourceImg);

    // Add  click event listeners to close-popup icon for mobile
    document.querySelector('.cancel_abs').addEventListener('click', () => {
      card.removeChild(mobilePopup);
    });
  } else { // peculiar design for desktop
    // create and append primary-and-actions container peculiar to desktop screen
    const primaryAndActions = document.createElement('div');
    primaryAndActions.classList.add('primary-and-actions');
    cardWorks.appendChild(primaryAndActions);

    // append the primary container
    primaryAndActions.appendChild(primary);
    const h3Content = worksData[0].name[1];
    h3.textContent = h3Content;
    primary.appendChild(h3);

    // append the tags container
    tags.classList.add('tags');
    for (let i = 0; i < 6; i += 1) {
      const tag = document.createElement('li');
      tag.classList.add('tag');
      tag.textContent = worksData[0].technologies[1][i];
      tags.appendChild(tag);
    }
    primary.appendChild(tags);

    // append the action container
    primaryAndActions.appendChild(action);
    action.appendChild(seeLiveButton);
    seeLiveButton.appendChild(seeLiveSpan);
    seeLiveButton.appendChild(seeLiveImg);
    action.appendChild(seeSourceButton);
    seeSourceButton.appendChild(seeSourceSpan);
    seeSourceButton.appendChild(seeSourceImg);
    primaryAndActions.appendChild(action);

    // append the secondary container
    secondary.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.';
    cardWorks.appendChild(secondary);
    cardWorks.appendChild(secondary);

    // Add click event listeners to close-popup icon for desktop
    document.querySelector('.close-popup-desktop').addEventListener('click', () => {
      card.removeChild(mobilePopup);
    });
  }
}

// Add click event listeners to the see-project buttons
document.querySelectorAll('.see-project').forEach((button) => {
  button.addEventListener('click', generatePopup);
});

const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (event) => {
  if (emailInput.value === emailInput.value.toLowerCase()) {
    // Email is in lowercase, allow form submission
    return true;
  } else {
    // Email is not in lowercase, prevent form submission and show error message

  }})