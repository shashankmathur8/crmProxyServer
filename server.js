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
sendMailUrl = 'https://graph.microsoft.com/beta/me/sendMail';
_apiKey = "iYAP9lLJI4nTfzugswcGJWjb8MzQbp954mFxSskYIuYSafyPcgPEqOM228iE20yJ";

_dataSource = "Bettrillion";
_database = "crm";
_textValue="Nottobeused";
_collectionUsers = "users";
_collectionCompany = "company";
_collectionCustomer = "customers";
_collectionUserHistory = "userhistory";
_collectionFiles = "files";

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


app.post('/sendMail', function (req, res, next) {

    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));
    /*
    var headers = {
        "Authorization": "Bearer ${mainController.mainAccessToken}",
        "content-type": "application/json",
      };
    */

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        var targetURL = sendMailUrl;
        if (!targetURL) {
            res.send(500, { error: 'There is no Target-Endpoint header in the request' });
            return;
        }
        request({
            url: targetURL, method: 'POST', json: req.body,
             headers: {
                'Authorization': req.header('Authorization'),
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

app.post('/fetchCompany', function (req, res, next) {

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
                "collection": _collectionCompany,
                "filter": req.body
                
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

app.post('/fetchAllCompanies', function (req, res, next) {

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
                "collection": _collectionCompany,
                
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

app.post('/updateCompany', function (req, res, next) {

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
                "collection": _collectionCompany,
                "filter": {
                    "companyID": req.body.companyID
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


app.post('/addCompany', function (req, res, next) {

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
            url: targetURL+"/action/insertOne", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionCompany,
                "document": req.body
                
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


app.post('/fetchCustomer', function (req, res, next) {

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
                "collection": _collectionCustomer,
                filter: req.body
                
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

app.post('/deleteCustomer', function (req, res, next) {

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
            url: targetURL+"/action/deleteOne", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionCustomer,
                filter: req.body
                
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

app.post('/deleteUser', function (req, res, next) {

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
            url: targetURL+"/action/deleteOne", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionUsers,
                filter: req.body
                
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


app.post('/deleteCompany', function (req, res, next) {

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
            url: targetURL+"/action/deleteOne", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionCompany,
                filter: req.body
                
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



app.post('/addCustomer', function (req, res, next) {

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
            url: targetURL+"/action/insertOne", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionCustomer,
                "document": req.body.document
                
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

app.post('/updateCustomer', function (req, res, next) {

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
                "collection": _collectionCustomer,
                "filter": {
                    "customerID": req.body.customerID
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


app.post('/updateUserPermissions', function (req, res, next) {

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
            url: targetURL+"/action/updateOne", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionUsers,
                "filter": {
                    "email": req.body.email
                  },
                  "update": req.body.update
                
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
app.post('/updateUserNotifications', function (req, res, next) {

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
            url: targetURL+"/action/updateOne", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionUsers,
                "filter": {
                    "email": req.body.email
                  },
                  "update": req.body.update
                
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




app.post('/fetchAllCustomer', function (req, res, next) {

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
                "collection": _collectionCustomer,
                
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

//_collectionUserHistory

app.post('/fetchUserHistory', function (req, res, next) {

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
                "collection": _collectionUserHistory,
                "filter": req.body
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

app.post('/addUserHistory', function (req, res, next) {

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
            url: targetURL+"/action/insertOne", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionUserHistory,
                "document": req.body
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

app.post('/addUser', function (req, res, next) {

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
            url: targetURL+"/action/insertOne", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionUsers,
                "document": req.body
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

//_collection = "files";

app.post('/uploadFiles', function (req, res, next) {

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
            url: targetURL+"/action/insertOne", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionFiles,
                "document": req.body
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

app.post('/fetchAttachmentsForUser', function (req, res, next) {

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
            url: targetURL+"/action/insertOne", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionFiles,
                "filter": req.body
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

app.post('/deleteAttachment', function (req, res, next) {

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
            url: targetURL+"/action/deleteOne", method: 'POST', json: {
                "dataSource": _dataSource,
                "database": _database,
                "collection": _collectionFiles,
                "filter": req.body
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

app.post('/fetchAttachments', function (req, res, next) {

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
                "collection": _collectionFiles,
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