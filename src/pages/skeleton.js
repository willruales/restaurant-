import first from "./first.js"
import second from "./second.js"

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

        event.preventDefault();
        let select = this.textContent
        console.log('Clickedddd:', select);
        switch (select) {
            case 'Home':
                first()
                break;
            case 'Menu':
                second()
                break;
            case 'About':
                about()
                break;
            case 'Contact':
                contact()
                // Expected output: "Mangoes and papayas are $2.79 a pound."
                break;
            default:
                console.log(`Sorry, we are out of .`);
        }

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
