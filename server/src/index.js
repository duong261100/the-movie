require('dotenv').config();
const express = require('express');
const cors = require('cors');
const route = require('./routes/index');

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
route(app)

// start server
app.listen(port, () => console.log(`server running at http://localhost:${port}`));