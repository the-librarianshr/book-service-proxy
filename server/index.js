const express = require('express');
let app = express();
const port = 3005;

app.use(express.static(__dirname + '/../public/dist'));



app.listen(port, () => console.log(`Listening on port ${port}!`));
