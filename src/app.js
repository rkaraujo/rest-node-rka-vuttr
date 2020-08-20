const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const config = require('./config');
const toolRoute = require('./routes/toolRoute');

const app = express();
app.use(bodyParser.json());
app.use(toolRoute);

mongoose.connect(config.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(config.PORT, () => {
  console.log('Server started');
});
