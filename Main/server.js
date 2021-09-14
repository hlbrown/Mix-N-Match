// start here
const express = require('express');
const utils = require('/utils');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(utils);

sequelize.sync({ force: false }).then(()=> {
    app.listen(PORT, () => console.log("Now Listening"));
});
