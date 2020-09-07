/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function navCreator() {
  // Build nav menu using document fragment
  // get sections so we can access their data-nav values to create the section links
     const sections = document.querySelectorAll('section');
     const navList = document.getElementById('navbar__list');
     const navDocFrag = document.createDocumentFragment();

 for (let sxn of sections) {
    const newElement = document.createElement('li');
    // get a handle to the section with the current id
    let sectionId = sxn.id;

    newElement.setAttribute('onclick',scrollToSxn(sectionId));
    newElement.classList.add('menu__link');
    newElement.classList.add(sectionId); //used later in activeNav
    newElement.innerHTML =  sxn.getAttribute('data-nav');
    navDocFrag.appendChild(newElement);
      }
  navList.appendChild(navDocFrag);
}

// Scroll to anchor ID using scrollTO event
function scrollToSxn(sectionId) {
  console.log('ScrollIntoView started');
  activeSxn = document.getElementById(sectionId);
  console.log('activesxn is: ' + activeSxn);
  activeSxn.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  console.log('ScrollIntoView ended');
  console.log('ScrollToSxn started activeNav');
  activeNav(sectionId);
}

/**
 * End Main Functions
 * Begin Events
 *
*/
// get the Location of the element on the page
function elementInViewport(element) {
  // get element location relative to the viewport
  const location = element.getBoundingClientRect();
  // compare element location in relation to window properties to determine if it's in viewport and return true if is

  if(location.top >= 0 && location.left >= 0 && location.right <= window.innerWidth && location.bottom <= window.innerHeight) {
      return true;
    } else {
      return false;
    }
}

//When a section is active or when top-level nav has been clicked, turn the corresponding nav item to it's active state by adding the appropriate css class and removing the active class from inactive links
// function should be added eventlisteners for link click and section moving into viewport
function activeNav(sectionId) {
  console.log("activeNav triggered");
  // triggers based on the active section/nav links
  // when activated, remove the active class from all the nav links/section
  const navLinks = document.querySelectorAll('#navbar__list > li')
  // the ID of the section passed to the Fxn is the active section
  let activeID = sectionId;
  console.log('the id of the active sxn is: ' + activeID)
    for (navLink of navLinks) {
      navLink.classList.remove('section--active');
      // put the active class back on only the section id equals the link html that triggered the Functions
      if (navLink.classList.contains(activeID)) {
        navLink.classList.toggle('section--active');
      }
   }
}

// Add class 'active' to section when near top of viewport and set the related nav link to active.
function setActive() {
  const sections = document.querySelectorAll('section');

  for (sxn of sections) {
     // loop through each section checking if it's in the viewport
     if (elementInViewport(sxn)) {
          sxn.classList.add('section--active');  // set section class to Active
          activeNav(sxn.id) //set the navitem classes active/or remove
      } else {
          sxn.classList.remove('section--active');   //remove the class active if it exists
        }
      }
    }

// add event listener to the sections to listen for scrolling into viewport
function eventListener() {
  window.addEventListener('scroll', setActive);
}
