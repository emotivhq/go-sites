module.exports = function(app, stormpath) {

	// Serve basic pages
    // Serve privacy.html in /privacy
    app.get('/privacy', function(req, res) {
        res.renderDebug('privacy.html');
    });
    // Serve terms.html in /terms
    app.get('/terms', function(req, res) {
        res.renderDebug('terms.html');
    });


	
	// Serve custom pages being hosted here
    //Serve baby-products.html 
    /*
    app.get('/the-page', function(req, res) {
        res.renderDebug('the-page.html');
    });
	*/
	
};