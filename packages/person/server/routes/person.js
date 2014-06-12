'use strict';

// The Package is past automatically as first parameter
module.exports = function(Person, app, auth, database) {

    app.get('/person/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/person/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/person/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/person/example/render', function(req, res, next) {
        Person.render('index', {
            package: 'person'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
