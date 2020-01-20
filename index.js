const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db/queries');
const port = 3001;
const calculator = require('./util/calculator')
const ttsMapper = require('./util/ttsMapper')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', (req, res, next) => {
    db.addData(req.body).then(() => {
       return res.status(200).send(); 
    })
    .catch(error => {
        return next(error);
    });
})

app.get('/:brand/:name', (req, res, next) => {
    db.getAverage(req.params).then((queryResponse) => {
        if (queryResponse.rowCount == 0) {
            return res.status(404).json("Shoe not found!")
        }
        else {
            var data = ttsMapper.parseTTSData(queryResponse.rows)
            return res.status(200).json(calculator.average(data));
        }
    })
    .catch ((error) => {
        return next(error);
    })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
})

module.exports = app;