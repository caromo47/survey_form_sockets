module.exports = function Route(app, server){
	//get socket.io module
	var io = require('socket.io').listen(server);
	// root route to render index.ejs view
	app.get('/', (req, res) => {
		res.render('index');
	});
	//listen to connections from the client side
	io.sockets.on('connection', (socket) =>{
		//server listening to the 'posting_form' event
		socket.on('posting_form', (data) =>{
			var random_number = Math.floor((Math.random() * 1000) +1);
			//emit data to the client
			socket.emit('updated_message', {response: data});
			socket.emit('random_number', {response: random_number});
		});
	});
}
