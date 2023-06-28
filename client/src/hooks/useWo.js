import { WorkoutsContext } from '../context/WoContext'; // Importing the WorkoutsContext from the WoContext file
import { useContext } from 'react'; // Importing the useContext hook from the React library

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext); // Accessing the WorkoutsContext using the useContext hook

  if (!context) {
    throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider'); // Throwing an error if the context is not found
  }

  return context; // Returning the context
};
