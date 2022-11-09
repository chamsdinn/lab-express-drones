const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("./../models/Drone.model")

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const allDrones = await Drone.find();
    res.render("drones/list", {allDrones})
  } catch (error) {
    next(error)
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name, propellers, maxSpeed} = req.body
  try {
    await Drone.create({name, propellers, maxSpeed})

    res.redirect("/drones")
  } catch (error) {
    next(error)
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const droneEdit = await Drone.findById(req.params.id)
    res.render("drones/update-form", {droneEdit})
  } catch (error) {
    next(error)
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const editedDrone = await Drone.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.redirect("/drones")
  } catch (error) {
    next(error)
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    await Drone.findByIdAndDelete(req.params.id)
    res.redirect("/drones")
  } catch (error) {
    next(error)
  }
});

module.exports = router;
