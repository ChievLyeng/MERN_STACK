import axios from "axios";
import { useState } from "react";

export const WorkoutForm = () => {
    const [title,setTitle] = useState("");
    const [load,setLoad] = useState("");
    const [reps,setReps] = useState("");
    const [error,setError] = useState(null);

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
    
            if (response.status === 200) {
                setTitle('');
                setLoad('');
                setReps('');
                setError(null);
                console.log('New workout added', response.data);
            }
        } catch (error) {
            setError('An error occurred while adding the workout');
            console.error('Error:', error);
        }
    };
    

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label > Exercize Title</label>
            <input type="text" value={title} onChange={handleChange_Title} />

            <label > Load (Kg) </label>
            <input type="number" value={load} onChange={handleChange_Load} />

            <label > Reps </label>
            <input type="number" value={reps} onChange={handleChange_Reps} />

            <button>Add Workout</button>
            {error &&  <div className="error">{error}</div> }
        </form>
    )
}