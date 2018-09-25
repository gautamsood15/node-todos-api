const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
     return console.log('Unable to connect to MongoDB server');
   }
   console.log('Connected to MongoDB server');

//deleteMany -- multiple deletion of the given criteria

  //  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //    console.log(result);
  //  });

//deleteOne -- deletes the first document meeting the criteria

  //  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //    console.log(result);
  //  })

//findOneAndDelete -- same as delete0ne() but also shows the deleted one

  //  db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //    console.log(result);
  //  })


// practice

  // db.collection('Users').deleteMany({name:'Andrew'});

db.collection('Users').findOneAndDelete({_id : new ObjectID("5ba65dd8ab6dfa37590a884b")}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
 })








  // db.close();
});
