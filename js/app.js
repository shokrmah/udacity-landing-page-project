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
//get the navbar menu
const myMenu = document.getElementById('navbar__list');

//get all the sections I have
const sectionsList = document.getElementsByTagName('section');

//this timer is used to close menu when scrolling is done
let timerForScrolling = null;

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
//menu sections is not huge is appending the children in the loop will not lead to a preformance issue
function createMenu(){
	
	
	//add menu items by section names
	for(const section of sectionsList){
		// Create a <li> 
		let listItem = document.createElement("li");                 
		// Create a <a> 
		let address = document.createElement("a");
		//set address location
		address.setAttribute("href","#"+section.getAttribute('id')); // Scroll to section on link click
		//set address showing name
		address.textContent = section.getAttribute('data-nav');
		//add to the list item
		listItem.appendChild(address);
		//add to the menu
		myMenu.appendChild(listItem);
	}
}


// Add class 'active' to section when near top of viewport
function updateActiveSection(){
	
	let loc = document.documentElement.scrollTop || document.body.scrollTop
	
	let activeIndex = 0;
	let minmiumDifference = 10000;
	
	//first thing to do is to clear all sections
	for(let i=0; i< sectionsList.length; i++){
		sectionsList[i].classList.remove('your-active-class');
		let diff = Math.abs(sectionsList[i].offsetTop - loc);
		if(diff < minmiumDifference)
		{
			minmiumDifference = diff;
			index = i;
		}
	}
	console.log(index);
	sectionsList[index].classList.add('your-active-class');
}

// Scroll to anchor ID using scrollTO event

function showMenu(e){
	//display menu while scrolling
   myMenu.style.display  = "block";

  
   if(timerForScrolling !== null) {
        clearTimeout(timerForScrolling);        
    }
    timerForScrolling = setTimeout(function() {
		//hide menu after timeout is finished
		  myMenu.style.display = "none";
			updateActiveSection();
    }, 1000);
  
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

createMenu();

// Set sections as active

window.addEventListener('scroll', showMenu, false);

