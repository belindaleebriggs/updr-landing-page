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

 for (sxn of sections) {
    const newElement = document.createElement('li');
    // get a handle to the section with the current id
    let sectionId = sections[sxn].getAttribute('id');
    let fxnToRun = 'scrollToSxn(' + sectionId + ')';

    newElement.setAttribute('onclick', fxnToRun);
    newElement.classList.add('menu__link');
    newElement.innerHTML =  sections[sxn].getAttribute('data-nav');
    navDocFrag.appendChild(newElement);
      }
  navList.appendChild(navDocFrag);
}

// Scroll to anchor ID using scrollTO event
function scrollToSxn(sectionId) {
  sectionId.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

/**
 * End Main Functions
 * Begin Events
 *
*/
// get the Location of the element on the page
function elementInViewport(element) {
  console.log('elementInViewport initiated');
  // get element location relative to the viewport
  const location = element.getBoundingClientRect();
  // compare element location in relation to window properties to determine if it's in viewport and return true if is

  if(location.top >= 0 && location.left >= 0 && location.right <= window.innerWidth && location.bottom <= window.innerHeight) {
      console.log(element.id + ' is in the viewport returned True');
      return true;
    } else {
      console.log(element.id + ' is NOT in the viewport False');
      return false;
    }
}
// Add class 'active' to section when near top of viewport
function setActive() {
  console.log('setActive initiated');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#navbar__list > li')

  for (sxn of sections) {
     // loop through each section checking if it's in the viewport
     if (elementInViewport(sections[sxn])) {
          sections[sxn].classList.add('section--active');// set section class to Active
          navLinks[sxn].classList.add('section--active'); //set the navitem class to Active
          console.log('Section ' + sxn + ' class list:' + sections[sxn].classList);
          console.log('Link ' + navLinks[sxn].id + ' class list:' + navLinks[sxn].classList);
      } else {
          sections[sxn].classList.remove('section--active');           //remove the class active if it exists
          navLinks[sxn].classList.remove('section--active'); //remove the navitem class  Active
          console.log('Section ' + sxn + ' class list:' + sections[sxn].classList);
          console.log('Link ' + navLinks[sxn].id + ' class list:' + navLinks[sxn].classList);
        }
      }
    }

// add event listener to the sections to listen for scrolling into viewport
function eventListener() {
  // let watchMeScroll = document.querySelector('main');
  // console.log('eventListener initiated');
  // watchMeScroll.addEventListener('scroll', setActive());
  window.addEventListener('scroll', setActive);
}
