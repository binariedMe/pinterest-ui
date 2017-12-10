const express = require('express');
const app = express();
app.use(express.static('../'));



app.get('/', (req, res) => {
	res.sendFile('index.html', { root: '../'});
});

app.listen(4000, () => console.log('Your server is up and listening at 4000'));

