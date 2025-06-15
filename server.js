const express = require('express');
const https = require('https');
const fs = require('fs');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();
const options = {
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('certificate.crt')
};

app.use(helmet()); 
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
    res.send('This site is safe and secured!');
});

app.get('/posts', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=60');
   });

app.get('/posts/:id', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300');
 });

app.post('/posts', (req, res) => {
    const newPost = req.body; 
    res.status(201).send(newPost); 
});

app.put('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const updatedPostData = req.body;     
    res.status(200).send(updatedPostData); 
});

app.delete('/posts/:id', (req, res) => {
    const postId = req.params.id;
    res.status(204).send(); 
});

https.createServer(options, app).listen(3000, () => {
    console.log('Secured server is running on https://localhost:3000');
});