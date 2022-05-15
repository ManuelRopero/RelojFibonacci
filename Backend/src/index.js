const express = require('express');
const app = express();
const cors = require('cors')
const puerto = 3001;
app.use(cors());
app.use('/', require('./routes/rutas'));

app.listen(puerto);

console.log("servidor corriendo en el puerto "+ puerto);

