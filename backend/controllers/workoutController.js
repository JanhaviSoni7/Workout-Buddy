const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// Get all workouts
const getWorkouts = async (req, res) => {
const user_id = req.user._id;

    const workouts = await Workout.find({user_id}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
};

//get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;

    //check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' });
    }

    //check if workout exists
    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({ error: 'No such workout' });
    }

    res.status(200).json(workout);
};

//create a new workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;

    let emptyFields = [];

    if (!title) {
        emptyFields.push('title');
    }
    if (!reps) {
        emptyFields.push('reps');
    }
    if (!load) {    
        emptyFields.push('load');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields });
    }

    //add doc to db
    try {
        const user_id = req.user._id;
        const workout = await Workout.create({ title, reps, load, user_id });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    //check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' });
    }

    //check if workout exists
    const workout = await Workout.findByIdAndDelete({_id: id});

    if (!workout) {
        return res.status(404).json({ error: 'No such workout' });
    }

    res.status(200).json(workout);
};

//update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;

    //check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' });
    }

    //check if workout exists
    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    });

    if (!workout) {
        return res.status(404).json({ error: 'No such workout' });
    }

    res.status(200).json(workout);
};

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
};