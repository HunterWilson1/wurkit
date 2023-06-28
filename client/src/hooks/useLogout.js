import { useAuthContext } from "./useAuthContext"; // Importing the useAuthContext hook from the "useAuthContext" file

export const useLogout = () => {
  const { dispatch } = useAuthContext(); // Accessing the dispatch function from the AuthContext using the useAuthContext hook

  const logout = () => {
    localStorage.removeItem("user"); // Removing the "user" item from localStorage

    dispatch({ type: "LOGOUT" }); // Dispatching a "LOGOUT" action
  };

  return { logout }; // Returning the logout function
};
