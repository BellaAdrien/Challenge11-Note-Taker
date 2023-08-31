const express = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');
// const feedbackRouter = require('./feedback');
// const diagnosticsRouter = require('./diagnostics');

const app = express();
// http://localhost:3001/api/notes
app.use('/notes', notesRouter);
// app.use('/feedback', feedbackRouter);
// app.use('/diagnostics', diagnosticsRouter);

module.exports = app;
