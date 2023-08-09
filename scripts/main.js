// make sure to import modules
import { parkList } from "./parkarea.js";

import { guestList } from "./guests.js";

import { serviceHeader } from "./services.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `<h1>Cider Falls!</h1>
<div class="header">${serviceHeader()}</div>


<h2>Park Areas</h2>
<article class="parkareaservice_flex">
            <section class="details_parkarea">
                ${parkList()}
            </section>

<article class="aside"
            <section class="details_guest">
                 <h2>Current Guests</h2>
                ${guestList()}
            </section>
            </article>
</article>
`;

mainContainer.innerHTML = applicationHTML;
