require('marko/node-require');

var template = require('./template');

try {
	var html = template.renderToString({
		'title': 'Jeroen'
	});

	console.log('I have valid HTML', html);
} catch (e) {
	console.log('We have an error', e);
}
