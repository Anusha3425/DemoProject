import connectDB from "./db.js";
import express from "express";
import {User} from "./models/userdata.models.js";
import bodyParser from "body-parser"
import UserRouter from "./routes/userdata.routes.js";


var app = express();

app.get('/', function (req, res) {
    res.send('Server is running');
});

app.listen(5000, function () {
    console.log('Server is running on http://localhost:5000');
});

app.use(bodyParser.json()) 


app.use('/user', UserRouter)
connectDB();

// const newUser = new User({
//     username: "Anvika",
//     email: "anvika34@gmail.com",
//     password: "Anvika34"
// })

// newUser.save().then(() => { console.log("User added successfully.") })