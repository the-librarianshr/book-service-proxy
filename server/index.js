const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
let app = express();
const port = 3005;

app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/books', (req, res) => {
  axios.get('http://localhost:3030/books').then((response) => {
    res.send(response.data);
  });
});

app.get('/book/:id', (req, res) => {
  const id = req.params.id;
  axios.get('http://localhost:3030/book/' + id).then((response) => {
    console.log('response:', response.data);
    res.redirect('/');
    res.end(response.data);
  })
})


app.listen(port, () => console.log(`Listening on port ${port}!`));
