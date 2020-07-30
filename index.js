const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use('/', express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
		if (msg[0] && msg[1]) io.emit('chat message', msg);
  });
});

const PORT = process.env.PORT || 5000;

function start() {
	http.listen(PORT, () => 
		console.log(`App has been started on port ${PORT}`)
	);
}

start();