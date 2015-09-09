module.exports = function(app) {

	var SwiftypeApi = require('swiftype')
	var swiftype = new SwiftypeApi({
  		apiKey: 'VdYctqMBnT-B2sjnXuoG'
	});


	app.get('/swift-engines', function(req, res) {
    	swiftype.engines.list(function(err, res) {
  			console.log(res);
			//res.send(JSON.stringify(req.body, null, 4));
			
		});
		res.end("res");
    });    

	
	app.get('/swift-engine', function(req, res) {
		swiftype.engines.get({
  			engine: 'giftstarter-main-search'
		}, function(err, res) {
  			console.log(res)
		});
		res.end("res");
    });    

	
	app.get('/swift-doctypes', function(req, res) {
		swiftype.documentTypes.list({
  			engine: 'giftstarter-main-search'
		}, function(err, res) {
  			console.log(res)
		});
		res.end("res");
    });    

	
	app.get('/swift-page', function(req, res) {
		swiftype.documentTypes.get({
  			engine: 'giftstarter-main-search', 
  			documentType: 'page'
		}, function(err, res) {
  			console.log(res)
		});
		res.end("res");
    });    
	
	
	app.get('/swift-simple-search', function(req, res) {
		swiftype.search({
  			engine: 'giftstarter-main-search', 
  			q: 'gift'
		}, function(err, res) {
  			console.log(res)
		});
		res.end("res");
    });    
	
	
	app.get('/swift-create-simple', function(req, res) {
		swiftype.documents.create({
  			engine: 'giftstarter-main-search', 
  			documentType: 'page',
  			document: {
    			external_id: '7701',
    			fields: [
      				{ name: 'title', value: 'APPLE 16GB IPAD MINI 3 (WI-FI + 4G LTE, GOLD)', type: 'string' },
      				{ name: 'brand', value: 'Apple', type: 'string' },
      				{ name: 'price', value: '$409.95', type: 'float' }
    			]
  			}
		}, function(err, res) {
  			console.log(res)
		});
		res.end("res");
    });    

		
	
};