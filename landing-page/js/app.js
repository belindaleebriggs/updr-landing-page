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

 for (let sxn = 0; sxn < sections.length; sxn ++) {
    const newElement = document.createElement('li');
    // get a handle to the section with the current id
    let sectionId = sections[sxn].getAttribute('id');
    let fxnToRun = 'scrollToSxn(' + sectionId + ')';

    newElement.setAttribute('onclick', fxnToRun);
    newElement.classList.add('menu__link');
    newElement.innerHTML =  sections[sxn].getAttribute('data-nav');;
    navDocFrag.appendChild(newElement);
      }
  navList.appendChild(navDocFrag);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
*/

// get the Location of the element on the page
function elementInViewport(element) {
  const location = element.getBoundingClientRect();
  if(location.top >= 0 && location.left >= 0 && location.right <= window.innerWidth && location.bottom <= window.innerHeight) {
      return true;
    } else {
      return false;
}
}

// Set sections as active
function setActive() {
  console.log('Your listener is firing');
     const sections = document.querySelectorAll('section');

     for (let sxn = 0; sxn < sections.length; sxn ++);    // loop through each section checking if it's in the viewport
        if (elementInViewport(sections[sxn]) === false) {
            sections[sxn].classList.toggle('active', sections[sxn].classList.contains("active"));           //remove the class active if it exists
        } else {
            sections[sxn].classList.toggle('active');// set the class to Active
        }
}

// add event listener to the sections to listen for scrolling into viewport
function eventListener() {
  let watchMeScroll = document.querySelector('main');
  watchMeScroll.addEventListener('scroll', setActive());
}
