const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const config = require('./config');
const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '100mb' }));
const corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '..', 'build')));
const options = {
    // autoIndex: false,
    useNewUrlParser: true,
};
console.log('Connect with: ' + config.domains.CONFIG_MONGO_URI);

function connectDB(canConnectWhenError = true) {
    mongoose.connect(config.domains.CONFIG_MONGO_URI, options)
        .then(() => {
            console.log(`Connected database successfully: ${config.domains.CONFIG_MONGO_URI}`);
            mongoose.connection.on('disconnected', function (e) {
                setTimeout(function () {
                    console.log('reconnect with mongodb');
                    connectDB(false);
                }, 2000);
            });

        }, err => {
            console.log(`Error while connecting to database\n${err}`);
            if (canConnectWhenError) {
                setTimeout(function () {
                    connectDB(true);
                }, 2000);
            }
        });
}

connectDB();
const apiVersion1 = '/api/v1';
app.use(`${apiVersion1}/categories`, require('./routers/categoryRouter'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});