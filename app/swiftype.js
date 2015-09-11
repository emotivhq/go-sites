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
  			console.log(res);
		});
		res.end("res");
    });    
	
	
	app.get('/swift-simple-search', function(req, res) {
		swiftype.search({
  			engine: 'giftstarter-main-search', 
  			q: 'gift'
		}, function(err, res) {
  			console.log(JSON.stringify(res, null, 4));
		});
		res.end("res");
    });    
	
	
	app.get('/swift-create-simple-gopro3', function(req, res) {
		swiftype.documents.create({
  			engine: 'giftstarter-main-search', 
  			documentType: 'page',
  			document: {
    			external_id: '7701',
    			fields: [
      				{ name: 'title', value: 'GoPro HERO3 White Edition Action Camera', type: 'string' },
      				{ name: 'brand', value: 'GoPro', type: 'string' },
      				{ name: 'price', value: '$199.99', type: 'float' },
      				{ name: 'url', value: 'https://www.giftstarter.com/giftideas/graduation/GoPro-HERO3-White-Edition', type: 'string' },
					{ name: 'body', value: 'For those grads who love to get out there and experience everything, a GoPro HERO3 camera is the ultimate in cool graduation gifts. The White Edition is both smaller and lighter than other GoPro models, and captures amazing, professional-quality video. Its\'s wearable, gear-mountable and waterproof for the ultimate in action shots, no matter what your grad has going on.', type: 'text'}
    			]
  			}
		}, function(err, res) {
  			console.log(res)
		});
		res.end("res");
    });    

		
	
};