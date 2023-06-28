require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const workouts = require('./routes/workoutRoutes');
const bodyParser = require('body-parser');

const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(bodyParser.json());
app.use('/api/workouts', workouts);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('listening on port 3001')
    })
})
.catch((err) => {
    console.log(err)
})

