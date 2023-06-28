import React, { createContext, useReducer } from "react"; // Importing React, createContext, and useReducer from "react"

export const WorkoutsContext = createContext(); // Creating the WorkoutsContext using createContext

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload, // Update the state with the new workouts array when the SET_WORKOUTS action is dispatched
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts], // Add the new workout to the beginning of the workouts array when the CREATE_WORKOUT action is dispatched
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id), // Remove the workout with the specified _id from the workouts array when the DELETE_WORKOUT action is dispatched
      };
    default:
      return state; // Return the current state for any other action
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: [], // Initialize workouts as an empty array
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children} 
    </WorkoutsContext.Provider>
  );
};
