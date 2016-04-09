module.exports = function(app) {

	
	// ====================================
	// Serve custom Emotiv homepage being hosted here
	// Repo: https://github.com/giftstarter/go-sites/src/themes/marvel
	// ====================================

    app.get('/stealth', function(req, res) {
        res.renderDebug('emotiv/stealth/index.html');
    });    
	
    app.get('/evite', function(req, res) {
        res.renderDebug('emotiv/try/evite.html');
    });    
	
    app.get('/deck', function(req, res) {
        res.renderDebug('emotiv/invest/index.html');
    });    

    app.get('/stack', function(req, res) {
        res.renderDebug('emotiv/stack/index.html');
    });    

    app.get('/500', function(req, res) {
        res.renderDebug('emotiv/500.html');
    }); 
		
		
	// ====================================
	// Serve custom go-sites homepage variants being hosted here
	// Repo: https://github.com/giftstarter/go-sites/src/themes/marvel
	// ====================================
	
    app.get('/gifting', function(req, res) {
        res.renderDebug('giftstarter/index.html');
    }); 
	
		
};