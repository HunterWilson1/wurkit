const Workout = require("../models/Workout");
const mongoose = require("mongoose");

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No workout" });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ err: "No workout" });
  }

  res.status(200).json(workout);
};

const createWorkout = async (req, res) => {
  const { title, reps, weight } = req.body;

  try {
    const workout = await Workout.create({ title, reps, weight });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ err });
  }
};

const delWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No workout" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ err: "No workout" });
  }

  res.status(200).json(workout);
};

const updWorkout = async (req, ers) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No workout" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    return res.status(404).json({ err: "No workout" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  delWorkout,
  updWorkout,
};