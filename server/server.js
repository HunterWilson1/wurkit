require('dotenv').config();
const path = require("path");
const express = require('express');
const mongoose = require('mongoose');
const workouts = require('./routes/workoutRoutes');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');

const app = express();


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(bodyParser.json());
app.use('/api/workouts', workouts);
app.use('/api/user', userRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const port = process.env.PORT || 3001;
    app.listen(port, '0.0.0.0', () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
