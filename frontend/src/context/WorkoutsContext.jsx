import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()

export const WorkoutsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutsReducer,{
        workouts: nulll
    })

    return (
        <WorkoutsContext.Provider value={}>
            {children}
        </WorkoutsContext.Provider>
    )
}