const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  delWorkout,
  updWorkout,
} = require("../controllers/workoutController");
const auth = require("../utils/auth");

const router = express.Router();
router.use(auth);
//gets all
router.get("/", getWorkouts);

//gets one
router.get("/:id", getWorkout);

//makes new
router.post("/", createWorkout);

//deletes one
router.delete("/:id", delWorkout);

//updates one
router.put("/:id", updWorkout);

module.exports = router;
