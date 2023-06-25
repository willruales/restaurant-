console.log("runnner")

import _ from 'lodash';
import printMe from './pages/landing.js';
import Empanada from './empanada.jpeg'

let content = document.querySelector("div")
console.log(content)



printMe()
// Create the header element
const header = document.createElement('header');
content.appendChild(header);


const navbar = document.createElement('nav');
navbar.className = 'navbar';

// Create the unordered list for the navbar links
const navList = document.createElement('ul');

// Array of navbar link names and URLs
const navbarLinks = [
    { name: 'Home', url: '#' },
    { name: 'About', url: '#' },
    { name: 'Menu', url: '#' },
    { name: 'Contact', url: '#' }
];

function handleNavItemClick(event) {
    event.preventDefault();
    console.log('Clickeeed:', this.name, this.url);
    // Add your custom logic here
}


// Loop through the navbar links array and create list items with anchor tags
navbarLinks.forEach(link => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = link.name;
    anchor.href = link.url;

    // Add event listener to each navbar link
    anchor.addEventListener('click', handleNavItemClick);

    listItem.appendChild(anchor);
    navList.appendChild(listItem);
});

// Append the unordered list to the navbar
navbar.appendChild(navList);

// Append the navbar to the body
content.appendChild(navbar);


// Create the heading element
const heading = document.createElement('h1');
heading.textContent = 'Welcome to Our Restaurant!';
header.appendChild(heading);

// Create the main element
const main = document.createElement('main');
content.appendChild(main);

// Create the paragraph element for the about section
const aboutParagraph = document.createElement('p');
aboutParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis auctor, sagittis odio vitae, congue est. Nulla facilisi. Nulla facilisis elit a dui pharetra, ac consequat nunc maximus. Sed iaculis eros nulla, in facilisis erat vestibulum vitae.';
main.appendChild(aboutParagraph);

// Create the paragraph element for the menu section
const menuParagraph = document.createElement('p');
menuParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis auctor, sagittis odio vitae, congue est. Nulla facilisi. Nulla facilisis elit a dui pharetra, ac consequat nunc maximus. Sed iaculis eros nulla, in facilisis erat vestibulum vitae.';
main.appendChild(menuParagraph);

// Create the paragraph element for the contact section
const contactParagraph = document.createElement('p');
contactParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis auctor, sagittis odio vitae, congue est. Nulla facilisi. Nulla facilisis elit a dui pharetra, ac consequat nunc maximus. Sed iaculis eros nulla, in facilisis erat vestibulum vitae.';
main.appendChild(contactParagraph);



const myIcon = new Image();

myIcon.src = Empanada;


content.appendChild(myIcon);

