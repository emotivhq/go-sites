module.exports = function(app) {

	
	// ====================================
	// Serve custom Emotiv homepage being hosted here
	// Repo: https://github.com/giftstarter/go-sites/src/themes/marvel
	// ====================================

    app.get('/hipster-ipsum-record-player', function(req, res) {
        res.renderDebug('emotiv/stealth-deck.html');
    });    
	
    app.get('/evite-is-hipster-ipsum', function(req, res) {
        res.renderDebug('emotiv/try/evite.html');
    });    
	
    app.get('/investors-are-hipster-ipsum', function(req, res) {
        res.renderDebug('emotiv/invest/index.html');
    });    

    app.get('/the-last-mile-is-hipster-ipsum', function(req, res) {
        res.renderDebug('emotiv/stack/index.html');
    });    

    app.get('/500-family-is-hipster-ipsum', function(req, res) {
        res.renderDebug('emotiv/500.html');
    }); 
		
		
	// ====================================
	// Serve custom go-sites homepage variants being hosted here
	// Repo: https://github.com/giftstarter/go-sites/src/themes/marvel
	// ====================================
	
    app.get('/giving', function(req, res) {
        res.renderDebug('giftstarter/index.html');
    }); 
	
		
};