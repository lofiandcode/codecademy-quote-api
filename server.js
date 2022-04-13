const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.send(randomQuote);
});

app.get('/api/quotes', (req, res, next) => {
    const query = req.query;
    console.log(query)
    if (Object.keys(query).length != 0){
        console.log('in outer first if')
        if (query.hasOwnProperty('person')) {
            const filteredQuotes = quotes.filter(quote => quote.person === query.person);
            res.send(filteredQuotes);
        } else {
            console.log("Error: Your query must contain a 'person' key")
        }
    } else {
        console.log('in outer else')
        res.send(quotes);
    }
})

app.post('/api/quotes', (req, res, next) => {
    const query = req.query;
    const hasQuote = query.hasOwnProperty('quote');
    const hasPerson = query.hasOwnProperty('person');
    if (hasQuote && hasPerson && Object.keys(query).length === 2) {
        quotes.push(query);
        res.send(query);
    } else {
        res.status(400).send();
    }
})
