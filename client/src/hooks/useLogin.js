import { useState } from "react"; // Importing the useState hook from "react"
import { useAuthContext } from "./useAuthContext"; // Importing the useAuthContext hook from the "useAuthContext" file

export const useLogin = () => {
  const [error, setError] = useState(null); // Setting up a state variable "error" and its setter function using useState hook
  const [isLoading, setIsLoading] = useState(null); // Setting up a state variable "isLoading" and its setter function using useState hook
  const { dispatch } = useAuthContext(); // Accessing the dispatch function from the AuthContext using the useAuthContext hook

  const login = async (email, password) => {
    setIsLoading(true); // Setting isLoading to true to indicate that login is in progress
    setError(null); // Resetting the error state

    const response = await fetch("/api/user/login", {
      method: "POST", // Sending a POST request
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }), // Sending email and password in the request body as JSON
    });
    const json = await response.json(); // Parsing the response body as JSON

    if (!response.ok) {
      setIsLoading(false); // Setting isLoading to false since login request is completed
      setError(json.error); // Setting the error state with the error message from the response
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json)); // Storing the user data in localStorage

      dispatch({ type: "LOGIN", payload: json }); // Dispatching a "LOGIN" action with the user data

      setIsLoading(false); // Setting isLoading to false since login request is completed
    }
  };

  return { login, isLoading, error }; // Returning the login function, isLoading state, and error state
};
