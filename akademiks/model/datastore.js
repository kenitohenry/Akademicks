var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we need some hot stuff, Database connected");

});
const Schema= mongoose.Schema;




// Field required for each new topic added to the database
/*
const topicSchema=new Schema({
topic: String,
content: String
});
const moduleSchema= new Schema({
module:String,
topics:[topicSchema]
});
const subjectSchema= new Schema({
subject:String,
modules:[moduleSchema]
});
// each schema is nested into its parent 


const Subject = mongoose.model('Subject', subjectSchema);

exports.Subject= Subject;
*/
const entrySchema = new Schema({
  subject:String,
  module:String,
  topic:String,
  content:String

});



const Entry= mongoose.model("Entry", entrySchema);

const findSubject= function(subject, done){
  
  Entry.find(
  {subject:subject}, 
  'subject module topic',
   function(err, data){
      (err)?done(err):done(null,data)
   }
  );
}

const findTopic= function(id, done){
  
  Entry.find(
  {_id:id}, 
  'subject module topic content',
   function(err, data){
      (err)?done(err):done(null,data)
   }
  );
}

const update=function(id, update, done){

  Entry.findByIdAndUpdate(id, { $set: update},{new:true},(err, data)=>{
    if (err) return done(err);
  done(null, data);
});
}

const del = function(id,done){
  Entry.findOneAndDelete({ _id: id }, (err, data)=>{
    (err)?done(err):done(null, data);
  });
}

exports.Entry=Entry;
exports.findSubject=findSubject;
exports.findTopic=findTopic;
exports.update=update;
exports.del =del;