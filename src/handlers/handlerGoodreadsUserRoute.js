// const nodeRequest = require('request');
const OAuth = require('oauth').OAuth;
require('env2')('.env');
const nodeRequest = require('request');

let callback_URL = 'http://localhost:8000/';

const handleOAuthRequest = (req, res) => {
    //This initalises the OAuth request with our parameters.
    var OAUTH = new OAuth(
        'https://www.goodreads.com/oauth/request_token',
        'https://www.goodreads.com/oauth/access_token',
        process.env.GOODREADS_KEY,
        process.env.GOODREADS_SECRET,
        '1.0A',
        callback_URL,
        'HMAC-SHA1'
    );

    //This accesses the OAuth request token from Goodreads.
    OAUTH.getOAuthRequestToken((error, oAuthToken, oAuthTokenSecret, results) => {
        if (error) console.error(new GoodreadsApiError(error.message, 'getRequestToken()'));
        
        // const url = 'https://goodreads.com/' + 'oauth/authenticate?oauth_token=' + oAuthToken + '&oauth_callback=' + callback_URL;

        const url = 'https://www.goodreads.com/oauth/authorize?oauth_token=Wjp33dOCbapyTGtHKJEIOQ';

        // This should load the OAuth grant screen for Goodreads.

        OAUTH.get(url, oAuthToken, oAuthTokenSecret,          
            (error, data, response) => {
                if (error) console.error(error);
                res.writeHead(302, {"X-Requested-With" : "XMLHttpRequest"});
                res.end(data);
            });  
    });    
}

module.exports = handleOAuthRequest;     