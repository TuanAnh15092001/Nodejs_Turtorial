// import express from 'express';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');


app.use(morgan('combined'));
app.get('/', (req, res) => {
    res.send('Hello World! chữ to lên tí đi');});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});