import Pika from '../images/Pickachu.png';
import skeleton from './skeleton';
export default function first() {

    skeleton()

    let content = document.querySelector("div")
    content.innerHTML = ""
    skeleton()
    const main = document.createElement('main');
    content.appendChild(main);
    // Create the paragraph element for the about section
    const aboutParagraph = document.createElement('p');
    aboutParagraph.textContent = 'second.';
    main.appendChild(aboutParagraph);

    // Create the paragraph element for the menu section
    const menuParagraph = document.createElement('p');
    menuParagraph.textContent = "seconddd"

    // Create the paragraph element for the contact section
    const contactParagraph = document.createElement('p');
    contactParagraph.textContent = 'Seconddddddddddddddd.';
    main.appendChild(contactParagraph);

    const myIcon = new Image();


    myIcon.src = Pika;


    content.appendChild(myIcon);


    return console.log('I get called from print.js! wotooot');



}


