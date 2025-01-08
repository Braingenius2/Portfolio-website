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
    name: ['Space Travellers hub', 'Book rockets to space!'],
    description: "Space Travelers Hub is a Single Page App that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. Built with React.",
    featuredImageMobile: 'images/space-travelers__missions.png',
    featuredImageDesktop: 'images/space-travelers__missions.png',
    technologies: [['HTML', 'CSS', 'JavaScript'], ['React', 'Redux', 'GitHub Actions', 'React Testing Library', 'React Router']],
    liveVersionLink: 'https://space-travellers-hub-ov4u.onrender.com/',
    sourceLink: 'https://github.com/Braingenius2/space-travelers-hub',
  },
  {
    name: ['MathMagician', 'Math companion'],
    description: "Math Magicians is a Single Page App for math. Perform simple calculations and read a random math-related quote to inspire and motivate mathematical thinking. Built with React.",
    featuredImageMobile: 'images/thumbnail_math_magicians2.png',
    featuredImageDesktop: 'images/thumbnail_math_magicians2.png',
    technologies: [['HTML', 'CSS', 'JavaScript'], ['React', 'React Router', 'React Testing Library', 'GitHub Actions']],
    liveVersionLink: 'https://math-magicians-mb6v.onrender.com/',
    sourceLink: 'https://github.com/Braingenius2/Math-Magicians',
  },
  {
    name: ['ToDo app', 'Organize your tasks'],
    description: "A minimalist to-do app that lets users plan their workflow. This was built using plain JavaScript",
    featuredImageMobile: 'images/thumbnail_todo_app.png',
    featuredImageDesktop: 'images/thumbnail_todo_app.png',
    technologies: [['HTML', 'CSS', 'JavaScript'], ['HTML', 'CSS', 'Vanilla JavaScript',]],
    liveVersionLink: 'https://braingenius2.github.io/To-Do-List/',
    sourceLink: 'https://github.com/Braingenius2/react-todo-app',
  },
  // ...additional projects...
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
worksData.forEach((work, index) => {
  const card = document.createElement('article');
  card.setAttribute('class', 'card');
  cardWorkRow.appendChild(card);

  const imgPlaceholder = document.createElement('figure');
  imgPlaceholder.setAttribute('class', 'img-placeholder');
  card.appendChild(imgPlaceholder);
  const figureContent = `<img src="${work.featuredImageMobile}" alt="Project ${index + 1}">
                        <figcaption>${work.name[0]}</figcaption>`;
  imgPlaceholder.innerHTML = figureContent;

  const cardText = document.createElement('div');
  cardText.setAttribute('class', 'text');
  card.appendChild(cardText);

  const cardName = document.createElement('h3');
  cardName.textContent = work.name[0];
  cardText.appendChild(cardName);

  const tags = document.createElement('ul');
  tags.classList.add('tags');

  work.technologies[0].forEach((technology) => {
    const tagItem = document.createElement('li');
    tagItem.textContent = technology;
    tags.appendChild(tagItem);
  });

  cardText.appendChild(tags);

  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('see-project');
  seeProjectButton.innerHTML = 'See project';
  cardText.appendChild(seeProjectButton);
});

// Define function to dynamically generate popup
function generatePopup(work) {
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
  const seeLiveButton = document.createElement('a');
  seeLiveButton.classList.add('see-live');
  seeLiveButton.href = work.liveVersionLink;
  seeLiveButton.target = '_blank';
  const seeLiveSpan = document.createElement('span');
  seeLiveSpan.classList.add('see');
  seeLiveSpan.textContent = 'See live';
  const seeLiveImg = document.createElement('img');
  seeLiveImg.src = 'images/see-live-icon.svg';
  seeLiveImg.alt = 'see live icon';
  const seeSourceButton = document.createElement('a');
  seeSourceButton.classList.add('see-source');
  seeSourceButton.href = work.sourceLink;
  seeSourceButton.target = '_blank';
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
    img1.src = work.featuredImageMobile;
    img1.alt = 'project image';
    const img2 = document.createElement('img');
    img2.classList.add('cancel_abs');
    img2.src = 'images/cancel-popup-mobile.png';
    featuredImage.appendChild(img1);
    featuredImage.appendChild(img2);
  } else { // Select image for desktop screen
    img1.src = work.featuredImageDesktop;
    img1.alt = 'project image';
    featuredImage.appendChild(img1);
  }
  cardWorks.appendChild(featuredImage);

  // peculiar design for mobile
  if (window.innerWidth < 768) {
    // append the primary container
    cardWorks.appendChild(primary);
    const h3Content = work.name[1];
    h3.textContent = h3Content;
    primary.appendChild(h3);

    // append the tags container
    tags.classList.add('tags');
    work.technologies[0].forEach((technology) => {
      const tag = document.createElement('li');
      tag.classList.add('tag');
      tag.textContent = technology;
      tags.appendChild(tag);
    });
    primary.appendChild(tags);

    // append the secondary container
    secondary.innerHTML = work.description;
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
    const h3Content = work.name[1];
    h3.textContent = h3Content;
    primary.appendChild(h3);

    // append the tags container
    tags.classList.add('tags');
    work.technologies[1].forEach((technology) => {
      const tag = document.createElement('li');
      tag.classList.add('tag');
      tag.textContent = technology;
      tags.appendChild(tag);
    });
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
    secondary.innerHTML = work.description;
    cardWorks.appendChild(secondary);
    cardWorks.appendChild(secondary);

    // Add click event listeners to close-popup icon for desktop
    document.querySelector('.close-popup-desktop').addEventListener('click', () => {
      card.removeChild(mobilePopup);
    });
  }
}

// Add click event listeners to the see-project buttons
document.querySelectorAll('.see-project').forEach((button, index) => {
  button.addEventListener('click', () => generatePopup(worksData[index]));
});

// Add client-side form validation

// show a message with a type of the input
function showMessage(input, message, type) {
  // get the small element and set the message
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  // update the class for the input
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function isNotLowerCase(input, message) {
  if (String(input.value) !== String(input.value).toLowerCase()) {
    return showError(input, message);
  }
  return showSuccess(input);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  if (!isNotLowerCase(input, invalidMsg)) {
    // check if the value is not in lowercase
    return false;
  }

  // validate email format
  const emailRegex = new RegExp('^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#contact-me');
const NAME_REQUIRED = 'Please enter your name';
const EMAIL_EMPTY = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a valid email address';

form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  // validate the form
  const nameValid = hasValue(form.elements.name, NAME_REQUIRED);
  const emailValid = validateEmail(form.elements.email, EMAIL_EMPTY, EMAIL_INVALID);
  const messageValid = hasValue(form.elements.message, 'Please enter a message');
  // if valid, submit the form.
  if (messageValid && nameValid && emailValid) {
    form.submit();
  }
});
