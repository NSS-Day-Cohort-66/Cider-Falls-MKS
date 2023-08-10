// make sure to import modules
import { parkList } from "./parkarea.js";

import { guestList } from "./guests.js";

import { serviceHeader } from "./services.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<div class="img_header">
<img class="img_logo" src="CiderFalls.png" alt="Cider Falls">
</div>
<div class="header">${serviceHeader()}</div>
<article class="parkareaservice_flex">
<div><h2>Park Area:</h2></div>
            <section class="details_parkarea">
                ${parkList()}
            </section>

<article class="aside">
            <section class="details_guest">
                 <h2>Current Guests</h2>
                ${guestList()}
            </section>
            </article>

            </article>
            <section>
            <div class="footer">
            123-456-7890 - ciderfalls@gmail.com - 1234 Cider Falls Road
            </div>
            </section>
`;

mainContainer.innerHTML = applicationHTML;
