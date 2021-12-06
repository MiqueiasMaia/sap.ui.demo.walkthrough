const cors_proxy = require('cors-anywhere');
const host = 'localhost';
const port = 8081;

cors_proxy.createServer({
    originWhitelist: [],
    requireHeader: ['Origin', '*'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function () {
    console.log('Running myProxy on ' + host + ':' + port);
});