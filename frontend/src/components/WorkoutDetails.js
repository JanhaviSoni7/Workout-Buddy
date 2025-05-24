import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    const handleClick = async () => {
<<<<<<< HEAD
        if(!user) {
            return;
        }
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE',
            headers: {
                'Authorization':`Bearer ${user.token}`
            }
=======
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/workouts/` + workout._id, {
            method: 'DELETE'
>>>>>>> 152d1e50377f64bd66bc734bfeb965b674400451
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json });
        }
    }

    return (
        <div className="workout-details">
            <h3>{workout.title}</h3>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    );
}

export default WorkoutDetails;
