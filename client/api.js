const fetchAttractions = () =>
  fetch("/api")
    .then(result => result.json())
    .catch(err => console.error(err));

const fetchItinerary = (hashId) =>
  fetch("/api/itineraries/" + hashId)
  .then(result => result.json())
  .catch(err => console.error(err));

const fetchPostSave = (data) => 
  fetch('/api/itineraries', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({
      // Itinerary Data
      data
    })
  });

module.exports = {
  fetchAttractions,
  fetchItinerary,
  fetchPostSave
};
