// const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
function ConnectDB() {
        const uri = process.env.SERVER_DB_URI;
        // const client = new MongoClient(uri, { useUnifiedTopology: true });
        // await client.connect()
        return new Promise((resolve, reject) => {   mongoose.connect(
       uri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            },
            function (err) {
                if (err) {
                    return reject({
                        message:
                            `Connection erorr to MongoDB at ${uri}` + err,
                    });
                } else {
                    console.log("Successfully Roles Permision connected mongodb...");
                    resolve(`Mongo connected at ${uri}`);
                }
            }
        );
    });
}

module.exports = {
    ConnectDB
}