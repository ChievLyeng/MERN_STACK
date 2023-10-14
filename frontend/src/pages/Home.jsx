import { useEffect, useState } from "react"
import axios from "axios"
import { WorkoutDetail } from "../components/WorkoutDetail"
import { WorkoutForm } from "../components/WorkoutForm"


export const Home = () => {
    const [workouts,setWorkouts] = useState(null)
    const URL = "http://localhost:8000";

    const getWorkout = async () => {

        axios.get(`${URL}/api/workouts`).then((res) => {
            setWorkouts(res.data);
        })

    }

    useEffect(()=> {
        getWorkout();
    }, []);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => (
                <WorkoutDetail workout={workout} key={workout._id} />
                ))}

                
            </div>
            <WorkoutForm />
        </div>
    )
}

