// make sure to import modules 

import { guestList } from "./guests.js";

import { serviceHeader } from "./services.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = 
`<h1>Cider Falls!</h1>
${serviceHeader()}

<article class="parkareaservice_flex">
            <section class="details_parkarea">
                <h2>Park Areas</h2>

            </section>
            <section class="details_services">
                <h2>Services</h2>

            </section>

<article class="aside"
            <section class="details_guest">
                 <h2>Current Guests</h2>
                ${guestList()}
            </section>
            </article>
</article>
`;






mainContainer.innerHTML = applicationHTML