import { getServices } from "./database.js";
const services = getServices()


// responisble for iterating thru each service available in each park 

export const serviceHeader = () => {
    let headerHTML = `Park Services: `
    for (const service of services) {
        headerHTML += `${service.name}, `
        
    }return headerHTML.slice(0, -2)
}




// pulling from parkareaservice in the database 



// separate function to iterate thru which park has which service. make a click event 