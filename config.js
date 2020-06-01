const Twitter = require('twit');
const port = process.env.PORT || 3000;
const apiClient = new Twitter({
    consumer_key: 'ian4MxjNmkBz3GccPMABeE7pn',
    consumer_secret: 'U8VsHJD66VcRN9QS7iVxcBLlSlNIVLD6md5t8snYCDQHf9EQc7',
    access_token: '1266450555632791558-fwU3GT37brSSZTrJNms3Aa8TpMImgm',
    access_token_secret: 'GkFVX5aG3ViHEUbuqeRA9srwqudC4WRup0pwq8vK6bclU'
});

module.exports = { port, apiClient };