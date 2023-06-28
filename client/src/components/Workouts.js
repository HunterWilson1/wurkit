const Workouts = ({ workout }) => {
    return (
        <div className="">
            <h4>{workout.title}</h4>
            <p>Weight: {workout.weight}</p>
            <p>Reps: {workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    );
};

export default Workouts;