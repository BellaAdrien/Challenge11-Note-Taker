const express = require('express');
const path = require('path');
const apiRoutes=require('./routes/apiRoutes')
const htmlRoutes=require('./routes/htmlRoutes')



const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// http://localhost:3001/api
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// make public the url homepage
app.use(express.static('public'));
// app is middleware
// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
