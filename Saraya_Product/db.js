const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://Achira:Achira2001@atlascluster.vojbnmm.mongodb.net/Saraya'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser:true});

var connection = mongoose.connection;

connection.on('error' , () =>{
    console.log('Mongo DB Connection failed');
})

connection.on('connected' , () =>{
    console.log('Mongo DB Connection Successful');
})

module.exports = mongoose;
