// import express from 'express';
const express = require('express')
const handlebars = require('express-handlebars');
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path');

//HTTP request logger 
const morgan = require('morgan');
app.use(morgan('combined'));

//Template engine, đổi tên đuôi .handlebars thành .hbs trong handlebars.engine()
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);})