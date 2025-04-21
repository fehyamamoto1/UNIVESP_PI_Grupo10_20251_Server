const express = require('express');
const connectToDatabase = require('./database');
const config = require('./config');

const app = express();
app.use(express.json());

connectToDatabase();

require("./routes/ingredients-route.js")(app);
require("./routes/menu-route.js")(app);
require("./routes/diningtables-route.js")(app);

const PORT = config.port;

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});