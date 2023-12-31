import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutsContext } from "../hooks/useWo";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      return;
    }

    const workout = { title, reps, weight };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setErr(json);
    } else {
      setTitle("");
      setReps("");
      setWeight("");
      setErr(null);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="workout-details bg-white border rounded-md mx-auto my-20 px-20 py-20 relative shadow-md text-center"
    >
      <h3 className="text-xl font-bold mb-4">Add a workout</h3>

      {err && (
        <p className="text-red-500 mt-2">{Object.values(err).join(", ")}</p>
      )}

      <label className="block">
        Exercise:
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full px-4 py-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-rose-500"
        />
      </label>

      <label className="block">
        Reps:
        <input
          type="text"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className="w-full px-4 py-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-rose-500"
        />
      </label>

      <label className="block">
        Weight:
        <input
          type="text"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
          className="w-full px-4 py-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-rose-500"
        />
      </label>

      <button
        type="submit"
        className="btn-primary mt-4 bg-rose-500 hover:bg-rose-600 p-2 rounded-md"
      >
        Add workout
      </button>
    </form>
  );
};

export default WorkoutForm;
