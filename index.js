const express = require('express');
const { sqlize } = require('./config/dbconfig')
const routes = require("./routes");
const bodyParser = require("body-parser");

const port = process.env.PORT || 15000; //setting up the port of the app

const app = express();
app.use(bodyParser.json());


app.get('/', (req, res, next)=>{
    res.status(200).json({message:"Welcome to root URL of the app"}); //added an home URL to check if things are working fine or not
});

app.use(routes);

app.all("*", (req, res, next)=>{
    res.status(404).json({message:"Invalid URL"}); //to display the users a message when they type in a wrong url
});


app.listen(port, async () => {
    try
    {
        await sqlize.sync({force: false}); //syncs the models with the database, needs a bit more clarification
        console.log("Server started: " + port);
    }
    catch(error)
    {
        console.log(error);
    }
});