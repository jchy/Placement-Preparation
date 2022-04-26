const express = require('express');
const app = express();
const cors= require('cors');
require('dotenv').config();
const userRouter= require('./app/routes/user.routes');
const connect = require('./app/config/db');

const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello I am Student Now");
})
// app.use("/users", userRouter);
app.use("/users", userRouter);  

const runServer = async() => {
    await connect();
    app.listen(PORT,()=>{
        console.log(`listening on PORT ${PORT}`);
    });
}
module.exports = runServer;