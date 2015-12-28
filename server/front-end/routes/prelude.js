var express = require('express');
var router = express.Router();
var version = require('circle-blvd/version');

var app;

var getDefaultParams = function (req) {
    var analyticsId = false;
    var settings = app.get('settings');
    if (settings && settings['google-analytics']) {
        analyticsId = settings['google-analytics'].value;
    }

    var params = {
        host: req.get('Host'),
        version: version,
        analyticsId: analyticsId,
        angularModuleName: 'cbPrelude'
    };

    return params;
};

var render = function (view) {
    return function (req, res, next) {
        res.render('prelude/' + view, getDefaultParams(req));
    };
};

router.get("/signin", function (req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    }
    else {
        res.render('prelude/signin', getDefaultParams(req));
    }
});

router.get("/intro", function (req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    }
    else {
        res.render('prelude/intro', getDefaultParams(req));
    }
});

router.get("/entrance", function (req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    }
    else {
        res.render('prelude/entrance', getDefaultParams(req));
    }
});

router.get("/entrance/old", function (req, res, next) {
    res.render('prelude/entrance-old', getDefaultParams(req));
});


router.get("/create", function (req, res, next) {
    if (!req.isAuthenticated()) {
        res.redirect('/signin');
    }
    else {
        render('create-circle')(req, res, next);
    }
});


router.get("/auth-forgot/signin/:docId/:secret", function (req, res, next) {
    var params = getDefaultParams(req);
    params.auth = {
        docId: req.params.docId,
        secret: req.params.secret
    }; 
    res.render('auth/forgot', params);
});             

router.get("/about", render('about'));

router.get('/tips', render('tips'));

router.get('/tour', render('tour'));
router.get('/tour/basics', render('tour-basics'));
router.get('/tour/organizers', render('tour-organizers'));
router.get('/tour/workflow', render('tour-workflow'));
router.get('/tour/more', render('tour-more'));


router.get('/tour/old', render('tour-old'));
router.get('/tour/start', render('tour-old'));
router.get('/tour/start/*', render('tour-old'));

router.get('/tour/work', render('tour-work'));
router.get('/tour/work/*', render('tour-work'));

router.get('/tour/plan', render('tour-plan'));
router.get('/tour/plan/*', render('tour-plan'));

router.get("/privacy", render('privacy'));
router.get("/partner", render('partner'));
router.get("/donate", render('donate'));

// Deprecated
router.get("/sponsor", function (req, res, next) {
    res.redirect('/partner');
});

router.get("/invite", render('invite'));
router.get("/invite/:inviteId", function (req, res, next) {
    var params = getDefaultParams(req);
    params.inviteId = req.params.inviteId;

    res.render('prelude/invite', params);
});

router.get("/docs", function (req, res, next) {
    res.redirect("/tour");
});

router.get("/contact", render('contact'));

router.get('/', function (req, res, next) {
    // Redirect to 'initialize' on first-time use.
    if (app.isInitializing) {
        res.render("prelude/initialize", getDefaultParams(req));
    }
    else if (!req.isAuthenticated()) {
        res.render('prelude/intro', getDefaultParams(req));
    }
    else {
        next();
    }
});

module.exports = function () {
    return {
        router: function (a) {
            app = a;
            return router;
        }
    }
}(); // closure