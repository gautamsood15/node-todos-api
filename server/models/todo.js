var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text : {
    type : String,
    required : true,
    minlength : 1,
    trim : true
  }, completed : {
    type : Boolean,
    default : false
  }, completedAt : {
    type :  Number,
    default : null
  }
});

module.exports = {Todo};







































//Model -- defines the template of the documents in a collection so that all documents have a unified format

// var Todo = mongoose.model('Todo', {          // model created
//   text : {
//     type : String
//   }, completed : {
//     type : Boolean
//   }, completedAt : {
//     type :  Number
//   }
// });
//
// var newTodo = new Todo({                      // creating a document    // mongoose does have TYPE CASTING
//   text : 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {              //saving the document to DB
//   console.log('Saved todo', doc);            // in doc __v is to keep track of various model changesin mongoose
// },(e) => {
//   console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//   text : true
//
// });
//
//
// otherTodo.save().then((doc) => {
//   console.log('Saved todo');
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save the todo', e);
// });
