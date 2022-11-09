// Iteration #1
require("./../db/index")

const Drone = require("./../models/Drone.model")

const drones = [
    {
        name: "Techdrone",
        propellers: 4,
        maxSpeed: 25,
    },
    {
        name: "Dronemotion Lite",
        propellers: 4,
        maxSpeed: 20,
    },
    {
        name: "Drone XT8",
        propellers: 4,
        maxSpeed: 30,
    }
]

seed();

async function seed(){
    await Drone.deleteMany();
    await Drone.create(drones);
}
