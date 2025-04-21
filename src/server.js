const express = require("express");
const connectToDatabase = require('./database');

const app = express();
app.use(express.json());

connectToDatabase();

require("./routes/ingredients-route.js")(app);
require("./routes/menu-route.js")(app);
require("./routes/diningtables-route.js")(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});