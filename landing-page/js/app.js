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
function scrollToSxn(sectionId) {
var element = document.getElementById(sectionId);
console.log(element);

element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
