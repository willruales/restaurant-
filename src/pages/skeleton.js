//import printMe from "./printMe.js"

export default function skeleton() {

    console.log("deleteme")

    let content = document.querySelector("div")
    console.log(content)

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
        //printMe()
        event.preventDefault();
        console.log('Clickedddd:', this.textContent);
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
    return content
}
