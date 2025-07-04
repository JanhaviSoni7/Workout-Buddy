const express = require('express');
const router = express.Router();
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');
// require auth for all workout routes
const requireAuth = require('../middleware/requireAuth');

// require auth for all workout routes
router.use(requireAuth);

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router;