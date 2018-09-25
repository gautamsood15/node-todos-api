var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

//Model -- defines the template of the documents in a collection so that all documents have a unified format

var Todo = mongoose.model('Todo', {          // model created
  text : {
    type : String
  }, completed : {
    type : Boolean
  }, completedAt : {
    type :  Number
  }
});
//
// var newTodo = new Todo({                      // creating a document
//   text : 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {              //saving the document to DB
//   console.log('Saved todo', doc);            // in doc __v is to keep track of various model changesin mongoose
// },(e) => {
//   console.log('Unable to save todo');
// });



var otherTodo = new Todo({
  text : 'Feed the cat',
  completed : true,
  completedAt : 123
});


otherTodo.save().then((doc) => {
  console.log('Saved todo');
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save the todo');
});
