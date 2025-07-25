require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/books', require('./routes/books'));
app.use('/api/books', require('./routes/reviews')); // nested under books

app.listen(5000, () => console.log("Server running on port 5000"));

