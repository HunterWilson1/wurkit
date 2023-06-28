require('dotenv').config()
const express = require('express');
const workouts = require('./routes/workoutRoutes')

const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(workouts)

app.listen(process.env.PORT, () => {
    console.log('listening on port 3000')
})