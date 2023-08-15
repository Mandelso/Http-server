const express = require('express');

const server = express();

//request handling methods
const handleAllTypesOfRquests = (req, res) => {
    res.send("Response for server.use")
}

const handleProfilePutRequestType = (req, res) => {
    res.send('Respond to profile request with method of value put');
}

server.post('/profile', handleAllTypesOfRquests);
server.get('/login', (req, res) => res.send('Hello, this is the login page.'))
server.put('/profile', handleProfilePutRequestType);
server.get('/signup', (req, res) => res.send('From the signup for get method'))
server.post('/*', (req, res) => res.send('404s Not Found'))


server.listen(3000, '127.0.0.1', () => console.log('Server is ready'));