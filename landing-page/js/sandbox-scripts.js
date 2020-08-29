// This can be used to change the color of the active section and the newly inactive sections
function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}

// This can be used to to retrieve and element by it's ID and then if it's class is currently active, it will set it to inactive, if inactive it sets it to active.  Not entirely what we need because we need to set the active to inactive and set the just clicked item to active.

let el = document.getElementById('item');

if (el.className === 'active'){
  el.className = 'inactive';
} else {
  el.className = 'active';
}

// Use this to modify above, using toggle will remove a class if it's already set for an element, otherwise it will add setInterval(function () {

div.classList.toggle("active"););

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
