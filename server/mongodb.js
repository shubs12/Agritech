// /Users/athar/mongodb/bin/mongod.exe --dbpath=/Users/athar/mongodb-data
// /Users/shubham/mongodb/bin/mongod.exe --dbpath=/Users/shubham/mongodb-data
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'agventure'

MongoClient.connect(connectionURL,{ useNewUrlParser: true , useUnifiedTopology: true}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
})