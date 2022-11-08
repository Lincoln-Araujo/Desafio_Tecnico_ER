const express = require('express');

const app = express();

const port = 4000;

const baseDir = `${__dirname}/build/`

app.use(express.static(`${baseDir}`));

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }));

app.listen(port, (err) => {
    if (err) {return console.log(err)}
    console.log(`Tudo funcionando certinho no servidor http://localhost:${port}`);
});