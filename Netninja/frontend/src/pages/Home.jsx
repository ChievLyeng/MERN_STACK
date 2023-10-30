import { useEffect } from "react"
import axios from "axios"
import { WorkoutDetail } from "../components/WorkoutDetail"
import { WorkoutForm } from "../components/WorkoutForm"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"


export const Home = () => {
    //that is local state we change to use the global context
    // const [workouts,setWorkouts] = useState(null)\

    const {workouts, dispatch} = useWorkoutsContext()
    const URL = "http://localhost:8000";

    const getWorkout = async () => {

        axios.get(`${URL}/api/workouts`).then((res) => {
            // setWorkouts(res.data);
            dispatch({type:'SET_WORKOUTS', payload: res.data})
        })

    }

    useEffect(()=> {
        getWorkout();
    }, [dispatch]);

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

