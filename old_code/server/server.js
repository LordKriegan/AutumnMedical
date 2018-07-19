//setup dev environment
if (process.env.NODE_ENV.trim() === "development"){
    require('dotenv').config(); //grab local copy of env var
}
//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./models');
const msgCrud = require('./routes/api/messages_crud');
const blogCrud = require('./routes/api/blogposts_crud');

//setup server
const PORT = process.env.PORT || 3001;
const app = express();

//Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use("/api", msgCrud);
app.use("/api", blogCrud);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname + '/client/build')));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

//start server
db.sequelize
    .sync({ 
            force: (process.env.NODE_ENV.trim() === 'development')
        })
    .then(() => {
        app.listen(PORT, () => {
                console.log("App listening on PORT " + PORT);
            })
    });
