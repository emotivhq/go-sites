module.exports = function(app) {

	
	// ====================================
	// Serve custom go-sites homepage variants being hosted here
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
	
	
};