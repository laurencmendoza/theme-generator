// import the mongoose library
require('dotenv').config()
const mongoose = require('mongoose')

// storing connection string in a variable - for testing
const connectionString = process.env.DATABASE_URL 
// console.log(connectionString)

// establish our mongoose connection
mongoose.connect(connectionString)

const db = mongoose.connection

db.on('connected', function(){
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
})

db.on('error', function(err){
    console.log(err);
})