const database = require('mongoose');

async function connectDb(url) {
    try {
        await database.connect(url)
    } catch (e) {
        console.log("the connection failed...");
        console.log(e);
    }
}


module.exports = connectDb;