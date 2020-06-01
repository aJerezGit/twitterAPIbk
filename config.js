const Twitter = require('twit');
const port = process.env.PORT || 3000;
const apiClient = new Twitter({
    consumer_key: 'your_consumer_key',
    consumer_secret: 'your_consumer_secret',
    access_token: 'your_access_token',
    access_token_secret: 'your_acces_token_secret'
});

module.exports = { port, apiClient };
