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
 // console.log(req.params.itinerary_id);
  let id = req.params.itinerary_id;
  itineraries.findById(id, {
    include: [{all: true, nested: true}]
  })
  .then(itinerary => res.json(itinerary))
  .catch(next);
});

router.post("/itineraries", (req, res, next) => {
  res.json(req.body);
})

module.exports = router;
