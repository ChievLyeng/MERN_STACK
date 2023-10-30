import axios from "axios";
import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

export const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext()
    const [title,setTitle] = useState("");
    const [load,setLoad] = useState("");
    const [reps,setReps] = useState("");
    const [error,setError] = useState(null);
    const [emptyFields,setEmptyFields] = useState([])

    const handleChange_Title = (e) => {
        setTitle(e.target.value)
    }
    
    const handleChange_Load = (e) => {
        setLoad(e.target.value)
    }

    const handleChange_Reps = (e) => {
        setReps(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, load, reps };
        
        try {
            //post to db
            const response = await axios.post('http://localhost:8000/api/workouts', workout, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const json = await response.data
            console.log(json.error)
            console.log(json.data)

            if (response.status !== 200) {
                setError(json.error)
                setEmptyFields(json.emptyFields)
                console.log("error")
            }

            if (response.status === 200) {
                setTitle('');
                setLoad('');
                setReps('');
                setError(null);
                setEmptyFields([]);
                console.log('New workout added', response.data);
                dispatch({type: 'CREATE_WORKOUT', payload: json})
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label > Exercize Title</label>
            <input 
                type="text" 
                value={title}
                onChange={handleChange_Title}
                className={emptyFields.includes('title')?  'error' : ''}
             />

            <label > Load (Kg) </label>
            <input 
                type="number"
                value={load} 
                onChange={handleChange_Load} 
                className={emptyFields.includes('load') ? 'error' : ''}
             />

            <label > Reps </label>
            <input 
                type="number" 
                value={reps} 
                onChange={handleChange_Reps} 
                className={emptyFields.includes('reps') ? 'error' : ''}
            />

            <button>Add Workout</button>
            {error &&  <div className="error">{error}</div> }
        </form>
    )
}