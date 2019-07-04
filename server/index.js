const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
let app = express();
const port = 3005;

app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/books', (req, res) => {
  axios({ url: 'http://localhost:3030/books', method: 'GET' }).then((response) => {
    console.log('res:', response);
    res.send(response.data);
  });
});

app.get('/book/:id', (req, res) => {
  const id = req.params.id;
  db.find(id, response => {
    console.log(response);
    res.send(response);
  })
})


app.listen(port, () => console.log(`Listening on port ${port}!`));
