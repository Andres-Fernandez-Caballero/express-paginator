const express = require('express');
const IndexController = require('./controllers/indexController');


const app = express();

app.set('view engine', 'ejs');

app.get('/', IndexController.index);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});