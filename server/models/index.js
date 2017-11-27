const db = require('./_db');

const Place = require('./place');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');
const Itinerary = require('./itinerary');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

Itinerary.belongsToMany(Hotel, {through: 'itinerary_hotel'});
Itinerary.belongsToMany(Restaurant, {through: 'itinerary_restaurant'});
Itinerary.belongsToMany(Activity, {through: 'itinerary_activity'});

module.exports = {
	db,
	Place,
	Hotel,
	Restaurant,
	Activity,
	Itinerary
};
