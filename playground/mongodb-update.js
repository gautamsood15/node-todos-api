const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
     return console.log('Unable to connect to MongoDB server');
   }
   console.log('Connected to MongoDB server');

   //findOneAndUpdate(filter used to target documents, updates to be made [using OPERATORS], options, callback/promises)
   // -- same as findOneAndDelete but returns the updated documents
  //  db.collection('Todos').findOneAndUpdate({
  //    _id : new ObjectID("5baa05205dd7b8ee34308763")}, {
  //    $set : {
  //      completed : true
  //    }},{
  //      returnOriginal: false
  //    }).then((result) => {
  //      console.log(result);
  //    })


  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID("5ba65fdc9480e439fdf4c013")}, {
      $set : {
        name : 'Andrew'
      },
    $inc : {
      age : 1
    }}, {
        returnOriginal : false
      }).then((result) => {
        console.log(result);
      });


  // db.close();
});
