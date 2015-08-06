module.exports = function(app, stormpath) {
//module.exports = function(app) {
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.html'); // load the index.ejs file
    });

	// Serve builder.html in /build
	// Let's also lock this down with stormpath, by directory groups
	//app.get('/build', stormpath.groupsRequired(['Tier 1', 'Tier 2', 'Admin', 'Beta'], false), function(req, res) {
	/*
	app.get('/build', stormpath.loginRequired, function(req, res) {
    	res.renderDebug('builder.html');
	});	
	app.get('/buildr', stormpath.loginRequired, function(req, res) {
    	res.renderDebug('secure-builder.html');
	});		
	*/
	
    /* KISS. A keep it simple routing scheme here... forever. This app is intended to
     * be a single page app with meta pages, both of which we can assign routes for.
     */

    /*/ Serve builder
    app.get('/build', function(req, res) {
        res.renderDebug('builder.html');
    });
	*/
	
	
	// Upload route handler
    app.post("/upload", function(req, res, next) {
        if(req.files) {
            console.log(util.inspect(req.files));
            if(req.files.myFile.size === 0) {
                return next(new Error("Please select a file."));
            }
            fs.exists(req.files.myFile.path, function(exists) {
                if(exists) {
                    res.end("We uploaded your landing page!");
                } else {
                    res.end("Well, there is no magic for those who don’t believe in it!");
                }
            });
        }
    });

	// Serve standard pages

	// Serve privacy.html in /privacy
    app.get('/privacy', function(req, res) {
        res.renderDebug('privacy.html');
    });
    // Serve terms.html in /terms
    app.get('/terms', function(req, res) {
        res.renderDebug('terms.html');
    });
	
	
	// ====================================
	// Serve custom pages being hosted here
	// ====================================
    app.get('/the-page', function(req, res) {
        res.renderDebug('the-page.html');
    });    
	
	

    // route middleware to make sure a user is logged in

    function isLoggedIn(req, res, next) {
        // if user is authenticated in the session, carry on 
        if(req.isAuthenticated()) return next();
        // if they aren't redirect them to the home page
        res.redirect('/');
    }

};