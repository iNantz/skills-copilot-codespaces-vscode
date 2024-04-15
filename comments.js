// create web server
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('This is the home page');
});

app.get('/comments', (req, res) => {
    res.send('This is a route for comments');
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
