const express = require('express');
const session = require('express-session');
const fileupload = require('express-fileupload');
const fs = require('fs');
const cors = require('cors');
const app = express();
let path = require('path');

const port = 5000;

app.use(session({secret: 'DKFDLFJ0908JDLKJFJ09LjIO9JDLFJ89679'}));
app.use(express.json());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}));
app.use(cors());

//ROTA
app.get("/", (req, res) => {
    res.json([{'teste': "isso é um teste!"}])
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});