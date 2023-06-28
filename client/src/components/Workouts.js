import { formatDistanceToNow } from "date-fns";
import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutsContext } from "../hooks/useWo";

const Workouts = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("./api/workouts/" + workout._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details bg-white border rounded-md mx-auto my-20 px-20 py-20 relative shadow-md">
      <h4 className="text-primary text-2xl mb-10">{workout.title}</h4>
      <p className="text-sm mb-2">Weight: {workout.weight}</p>
      <p className="text-sm mb-2">Reps: {workout.reps}</p>
      <p className="text-sm mb-2">
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span
        onClick={handleClick}
        className="absolute top-6 right-6 cursor-pointer bg-gray-200 p-2 rounded-full text-gray-700"
      >
        &#x2716;
      </span>
    </div>
  );
};

export default Workouts;
