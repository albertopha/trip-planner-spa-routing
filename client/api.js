const fetchAttractions = () =>
  fetch("/api")
    .then(result => result.json())
    .catch(err => console.error(err));

const fetchItinerary = (hashId) =>
  fetch("/api/itineraries/" + hashId)
  .then(result => result.json())
  .catch(err => console.error(err));
module.exports = {
  fetchAttractions,
  fetchItinerary
};
