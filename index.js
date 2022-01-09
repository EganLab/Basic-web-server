const express = require('express');
var bodyParser = require('body-parser');

const db = require('./models');
const app = express();
const port = 3000;

const hello = require('./routers/hello.router');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// view
app.set('view engine', 'pug');

// router
app.use('/user', hello); // get user info

// sync database
db.sequelize.sync();

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
