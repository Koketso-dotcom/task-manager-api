// CRUD create reade update and delete!

const { MongoClient, ObjectId} = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager' 

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
       return console.log('Unable to connect to database!')
    }

    console.log('Connected!')
    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 21
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'Clean the room'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })
})