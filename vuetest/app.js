const express = require('express')
const app = express()
const port = 3000
let ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index', {msg: "tjosan"});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))