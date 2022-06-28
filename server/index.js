const cors = require('cors');
const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(cors());

/*Database Import*/
const db = require('./models');

/*Router Imports*/
const usersRouter = require('./routes/Users');
app.use('/users', usersRouter);

db.sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log('Server is running on port 5000');
    });
});
