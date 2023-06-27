import Empanada from '../empanada.jpeg';
import skeleton from './skeleton';
export default function printMe() {



    const main = document.createElement('main');
    content.appendChild(main);
    // Create the paragraph element for the about section
    const aboutParagraph = document.createElement('p');
    aboutParagraph.textContent = 'Lor, cora, ac consequalisis erat vestibulum vitae.';
    content.innerHTML = main;

    // // Create the paragraph element for the menu section
    // const menuParagraph = document.createElement('p');
    // menuParagraph.textContent = 'Lorem ipsumnc maximus. Sed iaculis eros nulla, in facilisis erat vestibulum vitae.';
    // main.appendChild(menuParagraph);

    // // Create the paragraph element for the contact section
    // const contactParagraph = document.createElement('p');
    // contactParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis auctor, sagittis odio vitae, congue est. Nulla facilisi. Nulla facilisis elit a dui pharetra, ac consequat nunc maximus. Sed iaculis eros nulla, in facilisis erat vestibulum vitae.';
    // main.appendChild(contactParagraph);


    // const myIcon = new Image();

    // myIcon.src = Empanada;


    // content.appendChild(myIcon);


    return console.log('I get called from print.js! wotooot');


}

