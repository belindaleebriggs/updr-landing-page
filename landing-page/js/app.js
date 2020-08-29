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
function createNav() {
// Build nav menu using document fragment
// get sections so we can access their data-nav values to create the section links
 var sections = document.querySelectorAll('section');
 const navDocFrag = document.createDocumentFragment();
 for (let sxn = 0; sxn < sections.length; sxn ++) {
    const newElement = document.createElement("li");
    newElement.innerText = sections[sxn].data-nav;
    myDocFrag.appendChild(newElement);
      }
  document.body.appendChild(myDocFrag);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
