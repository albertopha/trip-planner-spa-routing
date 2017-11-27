const router = require("express").Router();
const Hotel = require("../models").Hotel;
const Restaurant = require("../models").Restaurant;
const Activity = require("../models").Activity;
const itineraries = require('../models').Itinerary;

router.get("/", (req, res, next) => {
  Promise.all([
    Hotel.findAll({ include: [{ all: true }] }),
    Restaurant.findAll({ include: [{ all: true }] }),
    Activity.findAll({ include: [{ all: true }] })
  ])
    .then(([hotels, restaurants, activities]) => {
      res.json({
        hotels,
        restaurants,
        activities
      });
    })
    .catch(next);
});

router.get('/itineraries/:itinerary_id', (req, res, next) => {
  let id = req.params.itinerary_id;
  console.log(id);
  itineraries.findById(id, {
    include: [{all: true, nested: true}]
  })
  .then(itinerary => res.json(itinerary))
  .catch(next);
});

module.exports = router;
