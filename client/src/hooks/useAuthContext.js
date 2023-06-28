import { AuthContext } from "../context/AuthContext"; // Importing the AuthContext from the "../context/AuthContext" file
import { useContext } from "react"; // Importing the useContext hook from "react"

export const useAuthContext = () => {
  const context = useContext(AuthContext); // Accessing the AuthContext using the useContext hook

  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider"); // Throwing an error if the AuthContext is not found
  }

  return context; // Returning the AuthContext
};

