// function with html to iterate thru each park

// clickevent function with window alert for how many guests are in each park

// function to iterate thru which guest are in which park
import { getParkAreas } from "./database.js";
import { getParkServices } from "./database.js";
import { getGuests } from "./database.js";
import { guestList } from "./guests.js";

export const parkList = () => {
  const parks = getParkAreas();

  let parkHTML = "";

  for (const park of parks) {
    const parkServices = getParkServices(park.id); //!Our function with park.id argument
    //!Inside the loop, the getParkServices function is called with the id property of the current park object as an argument. This function returns an array of service objects associated with the park.
    const servicesHTML = parkServices
      .map((service) => `<li>${service.name}</li>`)
      .join("");
    //!The map function is then used on the parkServices array to create an array of HTML list items (<li>) for each service name. The resulting array is then joined into a single string using the join method.
    parkHTML += `<section>
      <div data-type="${park.id}" data-name="parkareatitle" data-parkname="${park.name}">${park.name}</div>
      <ul>${servicesHTML}</ul>
    </section>`;
  }

  return parkHTML;
};

document.addEventListener("click", (clickEvent) => {
  const clickTarget = clickEvent.target;
  const parkid = clickTarget.dataset.type;
  const parkName = clickTarget.dataset.parkname;
  const guestList = getGuests();

  if (clickTarget.dataset.name === "parkareatitle") {
    let guestNumber = 0;
    for (const guests of guestList) {
      if (parseInt(parkid) === guests.parkAreaId) {
        guestNumber++;
      }
    }
    window.alert(`${parkName} currently has ${guestNumber} guests🐥`);
  }
});
