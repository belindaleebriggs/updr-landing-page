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
    let fxnToRun1 = 'scrollToSxn(' + sectionId + ')';
    let fxnToRun2 = 'activeNav(' + sxn + ')';

// Attempt with just one function, start wtih activeNav aka fxnToRun2
    newElement.setAttribute('onclick', fxnToRun2);

// Code to add both functions to listener.  Not working even though no console errors
//    newElement.setAttribute('onclick', fxnToRun1 + '; ' + fxnToRun2);
    newElement.classList.add('menu__link');
    newElement.innerHTML =  sxn.getAttribute('data-nav');
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
//When a section is active or when top-level nav has been clicked, turn the corresponding nav item to it's active state by adding the appropriate css class and removing the active class from inactive links
// function should be added eventlisteners for link click and section moving into viewport
function activeNav(sxn) {
  // triggers based on the active section/nav links
  // when activated, remove the active class from all the nav links/section
  const navLinks = document.querySelectorAll('#navbar__list > li')
  // get the ID of the active section
  let activeID = sxn.id;
    for (navLink of navLinks) {
      navLink.classList.remove('section--active');
      // put the active class back on only the section id equals the link html that triggered the Functions
      console.log(navLink.innerHTML);
      if (activeID == navLink.innerHTML) {
        navLink.classList.toggle('section--active');
      }
   }
}

// Add class 'active' to section when near top of viewport
function setActive() {
  console.log('setActive initiated');
  const sections = document.querySelectorAll('section');

  for (sxn of sections) {
     // loop through each section checking if it's in the viewport
     if (elementInViewport(sxn)) {
          sxn.classList.add('section--active');  // set section class to Active
          activeNav(sxn) //set the navitem classes active/or remove
          console.log('Section ' + sxn.id + ' class list:' + sxn.classList);
      } else {
          sxn.classList.remove('section--active');   //remove the class active if it exists
          console.log('Section ' + sxn.id + ' class list:' + sxn.classList);
        }
      }
    }

// add event listener to the sections to listen for scrolling into viewport
function eventListener() {
  window.addEventListener('scroll', setActive);
}
