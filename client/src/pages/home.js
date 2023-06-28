import { useEffect, useState } from "react";
import Workouts from "../components/Workouts";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);
  
    useEffect(() => {
      const fetchWorkouts = async () => {
        try {
          const response = await fetch('/api/workouts');
          const json = await response.json();
  
          if (response.ok) {
            setWorkouts(json);
          } else {
            console.error("Error fetching workouts:", response.status);
          }
        } catch (error) {
          console.error("Error fetching workouts:", error);
        }
      };
  
      fetchWorkouts();
    }, []);
  
    return (
      <div className="Home grid grid-cols-3 gap-8">
        <div className="col-span-3 md:col-span-2">
          {workouts &&
            workouts.map((workout) => (
              <Workouts key={workout._id} workout={workout} />
            ))}
        </div>
        <div className="col-span-3 md:col-span-1">
          <WorkoutForm />
        </div>
      </div>
    );
  };
  
  export default Home;
  