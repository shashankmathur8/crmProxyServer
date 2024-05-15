var express = require('express'),
    request = require('request'),
    bodyParser = require('body-parser'),
    app = express();

var myLimit = typeof(process.argv[2]) != 'undefined' ? process.argv[2] : '100kb';
console.log('Using limit: ', myLimit);

app.use(bodyParser.json({limit: myLimit}));

app.all('*', function (req, res, next) {

    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));
    userTargetUrl = 'https://ap-south-1.aws.data.mongodb-api.com/app/data-ehiqk/endpoint/data/v1/action/find';
    _apiKey = "iYAP9lLJI4nTfzugswcGJWjb8MzQbp954mFxSskYIuYSafyPcgPEqOM228iE20yJ";

    _dataSource = "Bettrillion";
    _database = "crm";
    _collection = "users";

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        var targetURL = userTargetUrl;
        if (!targetURL) {
            res.send(500, { error: 'There is no Target-Endpoint header in the request' });
            return;
        }
        request({
            url: targetURL, method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collection,
                "filter": { "username": "smathur4@slb.com", "password": "12345" },
            }, headers: {
                'apiKey': _apiKey,
                "content-type": "application/json",
                "Access-Control-Request-Headers": "*",
            }
        },
            function (error, response, body) {
                if (error) {
                    console.error('error: ' + response.statusCode)
                }
               console.log(body);
            }).pipe(res);
    }
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log('Proxy server listening on port ' + app.get('port'));
});