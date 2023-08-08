const database = {
  parkArea: [
    { id: 1, name: "Chamfort River" },
    { id: 2, name: "Lost Wolf Hiking Trail" },
    { id: 3, name: "Lodge Area" },
    { id: 4, name: "Gander River Preserve" },
    { id: 5, name: "Campgrounds" },
    { id: 6, name: "Pine Bluffs Trails" },
  ],
  services: [
    { id: 1, name: "rafting" },
    { id: 2, name: "canoeing" },
    { id: 3, name: "fishing" },
    { id: 4, name: "hiking" },
    { id: 5, name: "picnicking" },
    { id: 6, name: "rock climbing" },
    { id: 7, name: "lodging" },
    { id: 8, name: "parking" },
    { id: 9, name: "information" },
    { id: 10, name: "zip lines" },
  ],
  parkAreaService: [
    { id: 1, parkAreaId: 1, serviceId: 1 },
    { id: 2, parkAreaId: 1, serviceId: 2 },
    { id: 3, parkAreaId: 1, serviceId: 3 },
    { id: 4, parkAreaId: 2, serviceId: 4 },
    { id: 5, parkAreaId: 2, serviceId: 5 },
    { id: 6, parkAreaId: 2, serviceId: 6 },
    { id: 7, parkAreaId: 3, serviceId: 7 },
    { id: 8, parkAreaId: 3, serviceId: 8 },
    { id: 9, parkAreaId: 3, serviceId: 9 },
    { id: 10, parkAreaId: 3, serviceId: 5 },
    { id: 11, parkAreaId: 4, serviceId: 3 },
    { id: 12, parkAreaId: 4, serviceId: 4 },
    { id: 13, parkAreaId: 5, serviceId: 9 },
    { id: 14, parkAreaId: 5, serviceId: 7 },
    { id: 15, parkAreaId: 5, serviceId: 8 },
    { id: 16, parkAreaId: 6, serviceId: 4 },
    { id: 17, parkAreaId: 6, serviceId: 5 },
    { id: 18, parkAreaId: 6, serviceId: 10 },
  ],
  guests: [
    { id: 1, name: "John Smith", parkAreaId: 3 },
    { id: 2, name: "Jane Doe", parkAreaId: 2 },
    { id: 3, name: "Michael Johnson", parkAreaId: 5 },
    { id: 4, name: "Emily Williams", parkAreaId: 1 },
    { id: 5, name: "Daniel Brown", parkAreaId: 4 },
    { id: 6, name: "Sarah Davis", parkAreaId: 2 },
    { id: 7, name: "David Wilson", parkAreaId: 1 },
    { id: 8, name: "Olivia Taylor", parkAreaId: 6 },
    { id: 9, name: "James Miller", parkAreaId: 3 },
    { id: 10, name: "Sophia Anderson", parkAreaId: 4 },
    { id: 11, name: "Ethan Martinez", parkAreaId: 5 },
    { id: 12, name: "Ava Thompson", parkAreaId: 1 },
    { id: 13, name: "William Hall", parkAreaId: 2 },
    { id: 14, name: "Isabella Clark", parkAreaId: 3 },
    { id: 15, name: "Benjamin Lewis", parkAreaId: 4 },
    { id: 16, name: "Mia Scott", parkAreaId: 6 },
    { id: 17, name: "Alexander Young", parkAreaId: 1 },
    { id: 18, name: "Abigail Turner", parkAreaId: 2 },
    { id: 19, name: "Samuel White", parkAreaId: 5 },
    { id: 20, name: "Elizabeth Lee", parkAreaId: 3 },
    { id: 21, name: "Joseph Martin", parkAreaId: 4 },
    { id: 22, name: "Chloe Harris", parkAreaId: 1 },
    { id: 23, name: "Natalie King", parkAreaId: 6 },
    { id: 24, name: "Christopher Hall", parkAreaId: 2 },
    { id: 25, name: "Addison Moore", parkAreaId: 5 },
    { id: 26, name: "Andrew Davis", parkAreaId: 3 },
    { id: 27, name: "Harper Wilson", parkAreaId: 4 },
    { id: 28, name: "Grace Taylor", parkAreaId: 6 },
    { id: 29, name: "Jackson Adams", parkAreaId: 1 },
    { id: 30, name: "Sofia Martinez", parkAreaId: 2 },
  ],
};

export const getParkAreas = () => {
  return database.parkArea.map((parks) => ({ ...parks }));
};

export const getParkServices = (parkId) => {
  const parkServices = database.parkAreaService.filter(
    (parkService) => parkService.parkAreaId === parkId
  );
  return parkServices.map((parkService) => {
    return database.services.find(
      (service) => service.id === parkService.serviceId
    );
  });
};
export const getServices = () => {
  return database.services.map((service) => ({ ...service }));
};
export const getGuests = () => {
  return database.guests.map((guest) => ({ ...guest }));
};
