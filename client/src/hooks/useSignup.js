import { useState } from "react"; // Importing the useState hook from the React library
import { useAuthContext } from "./useAuthContext"; // Importing the useAuthContext hook from the "useAuthContext" file

export const useSignup = () => {
  const [error, setError] = useState(null); // Creating a state variable "error" and its setter function "setError"
  const [isLoading, setIsLoading] = useState(null); // Creating a state variable "isLoading" and its setter function "setIsLoading"
  const { dispatch } = useAuthContext(); // Accessing the dispatch function from the AuthContext using the useAuthContext hook

  const signup = async (email, password) => {
    setIsLoading(true); // Setting isLoading to true
    setError(null); // Resetting the error to null

    const response = await fetch("/api/user/signup", { // Making a POST request to "/api/user/signup"
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json(); // Parsing the response as JSON

    if (!response.ok) { // If the response is not okay (status code >= 400)
      setIsLoading(false); // Setting isLoading to false
      setError(json.error); // Setting the error to the error message received from the server
    }
    if (response.ok) { // If the response is okay (status code < 400)
      localStorage.setItem("user", JSON.stringify(json)); // Storing the user data in localStorage

      dispatch({ type: "LOGIN", payload: json }); // Dispatching a "LOGIN" action with the user data

      setIsLoading(false); // Setting isLoading to false
    }
  };

  return { signup, isLoading, error }; // Returning the signup function, isLoading state, and error state
};

