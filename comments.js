// Create web server
// Create a server that has a route for /comments and returns a JSON object with some comments.

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.json({
        comments: [
            {
                id: 1,
                text: "This is a comment"
            }
        ]
    });
});