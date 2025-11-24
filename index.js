// import express from 'express';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    res.send('Hello World! chữ to ');});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});