const express = require('express');
const app = express();

const port = 3000;
const hostname = "localhost";

app.use(express.static('public'));

//Add pastry information from client to database...
app.post('/list', function(req, res) {
	console.log('In /list');
})

app.get('/search', function(req, res) {
	console.log('In /search');
	//res.json(response)
});

app.listen(port, hostname, () => {
	console.log(`Listening at: http://${hostname}:${port}`);
});