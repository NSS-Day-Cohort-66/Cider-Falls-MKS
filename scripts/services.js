import { getServices } from "./database.js";
const services = getServices();

import { getParks } from "./database.js";

import { getParkAreas } from "./database.js";
import { getParkServices } from "./database.js";

// responisble for iterating thru each service available in each park

export const serviceHeader = () => {
  let headerHTML = `Park Services: `;
  for (const service of services) {
    headerHTML += `<data-type="service" data-id="${service.id}">${service.name}, `;
  }
  return headerHTML.slice(0, -2);
};


document.addEventListener("click", (clickEvent) => {
    const serviceClicked = clickEvent.target;
    const serviceId = parseInt(serviceClicked.dataset.id);
    const parks = getParkAreas(); 
    const matchingParkNames = []; 
    for (const parkArea of parks) {
      const parkServices = getParkServices(parkArea.id); 
      for (const parkService of parkServices) {
        if (parkService.id === serviceId) {
          matchingParkNames.push(parkArea.name); 
          break; 
        }
      }
    }
    if (matchingParkNames.length > 0) {
      window.alert(`Available in the following park areas: ${matchingParkNames.join(", ")}🏕️`);
    }
  });