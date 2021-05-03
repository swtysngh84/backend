const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require('dotenv').config()

const { ConnectDB }= require('./config/connectDb')

const employeeRoute = require('./routes/employee.route')

const port = process.env.PORT || 3001;

const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'media')));

app.use('/employee', employeeRoute);

ConnectDB().then(()=>{
    console.log('connected to Database')
})


app.get('/', function (req, res) {
    return res.send('This is Employee site!!');
});

app.listen(port,'', () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});