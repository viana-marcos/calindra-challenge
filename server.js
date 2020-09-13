const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')

app.set('port', 8080);

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
require("./routes/locationRouter")(app);

const port = app.get('port');
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});
