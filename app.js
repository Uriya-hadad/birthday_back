const express = require('express');
const cors = require('cors');
const returnListOfPeople = require('./routes/returnListOfPeople');
const connectDb = require('./DataBase/connectDb');
require('dotenv').config()



const app = express();
app.use(cors({
    origin: "http://localhost:3000",
}));
const port = 5000;
app.get('/data', returnListOfPeople);


const start = async (url) => {
    try {
        await connectDb(url)
        app.listen(port, () => {
            console.log(`listen on port ${port}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start(process.env.DB_URl);