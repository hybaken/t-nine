import express from 'express';
import convert from '../services/tnineService'

var router = express.Router();

/* POST convert string of numbers in to T9 prediction */
router.post('/', function (req, res, next) {
    if (req.body && req.body.numbers && typeof req.body.numbers === "string") {
        const input = req.body.numbers;
        const dictionary = req.body.dictionary;
        if (isNaN(input)) {
            res.status(400).send('Invalid request.');
            return;
        }
        if (input.length > 8) {
            res.status(400).send('Request is too long to process.');
            return;
        }
        const result = { prediction: convert(input, dictionary) }
        res.send(result);
        return;
    }
    res.status(400).send('Invalid request.');
});

module.exports = router;
