const express = require('express');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 5000;

const mongoDB = require("./db");
const { connect } = require('mongoose');
const connectToDB = require('./db');

app.use(
  cors({
    origin:  'http://52.55.146.177' // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'], // Allow these headers
  })
);

connectToDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
