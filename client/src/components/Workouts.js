const Workouts = ({ workout }) => {
    return (
      <div className="workout-details bg-white border rounded-md mx-auto my-20 px-20 py-20 relative shadow-md">
        <h4 className="text-primary text-2xl mb-10">{workout.title}</h4>
        <p className="text-sm mb-2">Weight: {workout.weight}</p>
        <p className="text-sm mb-2">Reps: {workout.reps}</p>
        <p className="text-sm mb-2">{workout.createdAt}</p>
        <span className="absolute top-6 right-6 cursor-pointer bg-gray-200 p-2 rounded-full text-gray-700">
          &#x2716;
        </span>
      </div>
    );
  };
  
  export default Workouts;