// function with html to iterate for list of guest to display on <aside>
// just to render guest list 


import { getGuests } from "./database.js";

const guests = getGuests()

export const guestList = () => {
    let html = "<ul>";
  
    for (const guest of guests) {
      html += `<li data-type="guest" data-name="${guest.name}" data-id="${guest.id}">${guest.name}</li>`;
    }
  
    html += "</ul>";
    return html;
  };