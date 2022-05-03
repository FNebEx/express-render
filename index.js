import express from 'express';

// Initialize applicaiton
const app = express();
const port = process.env.PORT || (4040);

// Using middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello 😀'
  });
});

app.get('/render', (req, res) => {
  res.json({
    message: 'API hosted on render'
  });
});

app.listen(port, () => console.log(`Listening on port${port}`));