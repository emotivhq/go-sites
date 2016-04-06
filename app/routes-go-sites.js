module.exports = function(app) {

	
	// ====================================
	// Serve custom Emotiv homepage being hosted here
	// Repo: https://github.com/giftstarter/go-sites/src/themes/marvel
	// ====================================
    app.get('/', function(req, res) {
        res.renderDebug('emotiv/index.html');
    }); 

    app.get('/try', function(req, res) {
        res.renderDebug('emotiv/try/index.html');
    });    
	
    app.get('/evite', function(req, res) {
        res.renderDebug('emotiv/try/evite.html');
    });    
	
    app.get('/deck', function(req, res) {
        res.renderDebug('emotiv/invest/index.html');
    });    

    app.get('/500', function(req, res) {
        res.renderDebug('emotiv/500.html');
    }); 
		
		
	// ====================================
	// Serve custom giftstarter go-sites homepage variants being hosted here
	// Repo: https://github.com/giftstarter/go-sites/src/themes/marvel
	// ====================================
    app.get('/home', function(req, res) {
        res.renderDebug('experiments/homepage/marvel/variant-1.html');
    });    
	
    app.get('/welcome', function(req, res) {
        res.renderDebug('experiments/homepage/marvel/variant-2.html');
    });    

    app.get('/main', function(req, res) {
        res.renderDebug('experiments/homepage/marvel/variant-3.html');
    }); 
	
    app.get('/500', function(req, res) {
    }); 
		
};