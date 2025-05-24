import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import {useAuthContext} from "../hooks/useAuthContext";


//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutsForm";

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
<<<<<<< HEAD
            const response = await fetch('/api/workouts',{
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
=======
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/workouts`);
>>>>>>> 152d1e50377f64bd66bc734bfeb965b674400451
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json });
            }
        };
        
        if (user) {
            fetchWorkouts();
        }
    },[dispatch, user]);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
};
export default Home;
