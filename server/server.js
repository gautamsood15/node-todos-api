var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

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

// var Todo = mongoose.model('Todo', {
//   text : {
//     type : String,
//     required : true,
//     minlength : 1,
//     trim : true
//   }, completed : {
//     type : Boolean,
//     default : false
//   }, completedAt : {
//     type :  Number,
//     default : null
//   }
// });
//
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


//User
//email - require it - trim it - set type - minlength : 1




var User = mongoose.model('User', {
    email : {
      required : true,
      trim : true,
      type : String,
      minlength : 1
  }
});


var newUser = new User({
  email :  'andrew@example.com        '
});

newUser.save().then((doc) => {
  console.log('Saved User', doc);
}, (e) =>  {
  console.log('Unable to save user', e);
});
