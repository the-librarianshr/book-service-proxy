const express = require('express');
const cors = require('cors');
let app = express();
const port = 3005;


app.options('*', cors());
app.use('*', cors(), express.static(__dirname + '/../public/dist'));


app.listen(port, () => console.log(`Listening on port ${port}!`));