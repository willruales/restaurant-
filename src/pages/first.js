import Empanada from '../images/empanada.jpeg';
import skeleton from './skeleton';
export default function first() {



    let content = document.querySelector("div")
    content.innerHTML = ""
    skeleton()
    const main = document.createElement('main');
    content.appendChild(main);
    // Create the paragraph element for the about section
    const aboutParagraph = document.createElement('p');
    aboutParagraph.textContent = 'Lorsppppppageti pharetra, ac consequat nunc maximus. Sed iaculis eros nulla, in facilisis erat vestibulum vitae.';
    main.appendChild(aboutParagraph);

    // Create the paragraph element for the menu section
    const menuParagraph = document.createElement('p');
    menuParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis auctor, sagittis odio vitae, congue est. Nulla facilisi. Nulla facilisis elit a dui pharetra, ac consequat nunc maximus. Sed iaculis eros nulla, in facilisis erat vestibulum vitae.';
    main.appendChild(menuParagraph);

    // Create the paragraph element for the contact section
    const contactParagraph = document.createElement('p');
    contactParagraph.textContent = 'Lomaximus. Sed iaculis eros nulla, in facilisis erat vestibulum vitae.';
    main.appendChild(contactParagraph);


    const myIcon = new Image();

    myIcon.src = Empanada;


    content.appendChild(myIcon);


    return console.log('I get called from print.js! wotooot');


}

