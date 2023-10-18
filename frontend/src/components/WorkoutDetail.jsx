import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import axios from "axios"
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export const WorkoutDetail = ({workout}) => {
  const {dispatch} = useWorkoutsContext()

  const handleClick = async () => {
    console.log("click")
    const response = await axios.delete('http://localhost:8000/api/workouts/' + workout._id)

    const json = await response.data
    console.log(json)

    if (response.status === 200) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
      console.log("ok")
    }
  }

    return (
        <div className="workout-details">
          <h4>{workout.title}</h4>
          <p><strong>Load (kg): </strong>{workout.load}</p>
          <p><strong>Number of reps: </strong>{workout.reps}</p>
          
          {/* this convert the createdAt to the past date time till now */}
          <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
          {/* <p> {workout.createdAt} </p> */}

          <span onClick={handleClick}>Delete</span>
        </div>
      )
}