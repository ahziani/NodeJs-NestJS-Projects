const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://vukkipiydi:RUhpFOpe8bU8yepU@cluster0.8afua.mongodb.net/store?retryWrites=true&w=majority&appName=Cluster0';

let db;
exports.mongoConnect = () => {
    mongoClient.connect(url)
    .then(result => {
        db = result.db();
        console.log('Connected');
    })
    .catch(err => {
        console.log('Not Connected');
    })
}

exports.getDB = () => {
    if (db) {
        return db
    } else {
        throw 'No database';
    }
}