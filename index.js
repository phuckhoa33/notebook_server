const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./model');

var corOptions = {
    origin: 'https://localhost:3000'
}

// Middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('dotenv').config();
// db
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: "+err.message);
    });

require('./router/user.router')(app);
require('./router/note.router')(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});