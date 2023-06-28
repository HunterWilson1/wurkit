import { createContext, useEffect, useReducer } from "react"; // Importing createContext, useEffect, and useReducer from "react"

export const AuthContext = createContext(); // Creating the AuthContext using createContext

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload }; // Update the state with the user payload when the LOGIN action is dispatched
    case "LOGOUT":
      return { user: null }; // Set the user to null when the LOGOUT action is dispatched
    default:
      return state; // Return the current state for any other action
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null, // Initial state with user set to null
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); // Get the user from localStorage

    if (user) {
      dispatch({ type: "LOGIN", payload: user }); // Dispatch LOGIN action with the user payload if user exists in localStorage
    }
  }, []);

  console.log("AuthContext state:", state); // Log the state to the console for debugging purposes

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children} 
    </AuthContext.Provider>
  );
};
