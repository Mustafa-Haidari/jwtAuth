require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connnection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth')

// database connection
connnection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.Port || 8080;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})