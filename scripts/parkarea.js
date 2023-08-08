// function with html to iterate thru each park

// clickevent function with window alert for how many guests are in each park

// function to iterate thru which guest are in which park
import { getParkAreas } from "./database.js";
import { getParkServices } from "./database.js";

export const parkList = () => {
  const parks = getParkAreas();

  let parkHTML = "";

  for (const park of parks) {
    const parkServices = getParkServices(park.id);
    const servicesHTML = parkServices
      .map((service) => `<li>${service.name}</li>`)
      .join("");

    parkHTML += `<section>
      <div>${park.name}</div>
      <ul>${servicesHTML}</ul>
    </section>`;
  }

  return parkHTML;
};

// export const parkList = () => {
//     const parks = getParkAreas();

//     let parkHTML = "";

//     for (const park of parks) {
//       parkHTML += `<section>
//           <div>${park.name}</div>
//           `;
//     }
//     return parkHTML;
//   };
