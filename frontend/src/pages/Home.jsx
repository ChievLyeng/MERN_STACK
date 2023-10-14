import { useEffect, useState } from "react"
import { WorkoutDetail } from "../components/WorkoutDetail"

export const Home = () => {
    const [workouts,setWorouts] = useState(null)

    useEffect(()=> {
        const getWorkout = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok){
                setWorouts(json)
            }
        }

        getWorkout()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => (
                <WorkoutDetail workout={workout} key={workout._id} />
                ))}
            </div>
        </div>
    )
}

