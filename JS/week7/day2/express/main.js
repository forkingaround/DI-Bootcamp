/*
Create a middleware that retrieves today's date and the 
current time (H/M/S)

Create 2 routes

1. Call this middleware before every route

2. Call this middleware before the 2nd route
*/
const express = require('express');
const app = express();

app.use((req,res,next) => {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(`Today is ${date.toDateString()} and the time is ${time}`);
    // res.send("<h1>midware called</h1>");
    next();
});
app.get('/', (req, res) => {
    res.send('<h1>index Page</h1>');
    console.log('index Page');
});
app.get('/home', (req, res) => {
    res.send('<h1>Home Page</h1>');
    console.log('Home Page');
});

app.listen(3000, 'localhost');