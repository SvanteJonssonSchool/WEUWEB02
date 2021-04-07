const express = require('express')
const app = express()
const port = 3000

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('../../cool/dist/index', {msg: "tjosan"});
});

app.listen(port, () => console.log(`Example app listening on port port!`))