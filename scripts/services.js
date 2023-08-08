import { getServices } from "./database.js";
const services = getServices()


// responisble for iterating thru each service available in each park 

export const serviceHeader = () => {
    let headerHTML = ``
    for (const service of services) {
        headerHTML += 
    }
}




// pulling from parkareaservice in the database 



// separate function to iterate thru which park has which service. make a click event 