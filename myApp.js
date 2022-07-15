require('dotenv').config();
let express = require('express');
let app = express();
const absolutePath = __dirname + '/views/index.html';
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile(absolutePath);
});
app.get('/json', (req, res) => {
  res.json({
    message:
      process.env.MESSAGE_STYLE === 'uppercase'
        ? 'Hello json'.toUpperCase()
        : 'Hello json',
  });
});

module.exports = app;
