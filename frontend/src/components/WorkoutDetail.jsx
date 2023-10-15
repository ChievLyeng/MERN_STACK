import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import axios from "axios"

export const WorkoutDetail = ({workout}) => {
  const {dispatch} = useWorkoutsContext()

  const handleClick = async () => {
    const response = await axios.get('/api/workouts' + workout._id, {
      method: 'DELETE'
    })

    const json = await response.data
  }

    return (
        <div className="workout-details">
          <h4>{workout.title}</h4>
          <p><strong>Load (kg): </strong>{workout.load}</p>
          <p><strong>Number of reps: </strong>{workout.reps}</p>
          <p>{workout.createdAt}</p>
          <span onClick={handleClick}>Delete</span>
        </div>
      )
}