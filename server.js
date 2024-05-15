var express = require('express'),
    request = require('request'),
    bodyParser = require('body-parser'),
    app = express();
app.use(bodyParser.json({
    extended: true
}));
app.use(bodyParser.urlencoded({ extended: true }));

var myLimit = typeof(process.argv[2]) != 'undefined' ? process.argv[2] : '100kb';
console.log('Using limit: ', myLimit);

userTargetUrl = 'https://ap-south-1.aws.data.mongodb-api.com/app/data-ehiqk/endpoint/data/v1';
_apiKey = "iYAP9lLJI4nTfzugswcGJWjb8MzQbp954mFxSskYIuYSafyPcgPEqOM228iE20yJ";

_dataSource = "Bettrillion";
_database = "crm";
_collectionUsers = "users";

app.use(bodyParser.json({limit: myLimit}));

app.post('/userLogin', function (req, res, next) {

    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

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
            url: targetURL+"/action/find", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionUsers,
                "filter": req.body,
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

app.post('/userFetch', function (req, res, next) {

    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

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
            url: targetURL+"/action/find", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionUsers,
                "filter": req.body,
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

app.post('/fetchCurrentUser', function (req, res, next) {

    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

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
            url: targetURL+"/action/find", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionUsers,
                "filter": req.body,
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

app.post('/fetchAllUsers', function (req, res, next) {

    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

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
            url: targetURL+"/action/find", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionUsers,
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
app.post('/updateUser', function (req, res, next) {

    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

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
            url: targetURL+"/action/replaceOne", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionUsers,
                "filter": {
                    "username": req.body.username
                  },
                  "replacement": req.body.replacement
                
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