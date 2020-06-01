const express = require('express');
const app = express();
const config = require('./config');
const cors = require('cors'); 
const bodyParser = require('body-parser'); 

app.use(cors());
app.use(bodyParser.json());

// app.get('/tweets', (req, res) => {
//     const params = {
//         tweet_mode: 'extended',
//         count: 9
//     };
//     config.apiClient.get('statuses/home_timeline', params)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(error => {
//             res.send(error);
//         });        
// });

app.get('/tweets', (req, res) => {
    const params = { 
        q: 'coronavirus',
        tweet_mode: 'extended',
        count: 9
    };
    config.apiClient.get('search/tweets', params)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.send(error);
        });
        
});

app.get('/search/:word', (req, res) => {
    const params = { 
        q: req.params.word,
        tweet_mode: 'extended',
        count: 9,
        result_type: 'recent'
    };
    config.apiClient.get('search/tweets', params)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.send(error);
        });
        
});

app.listen(config.port, () => {
    console.log('Server running on port ' + config.port);
});