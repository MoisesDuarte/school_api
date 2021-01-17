const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./config/database');
const { port } = require('./config/index');

// App init
const app = express();

// App dependencies
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/schools', require('./api/routes/school'));

app.listen(port, () => {
    console.log(`App listening on localhost:${port}`);
});