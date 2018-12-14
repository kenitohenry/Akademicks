var express = require('express');
var router = express.Router();
 const datastore =require("../model/datastore")
/* GET home page. */
const orderArray=function(Arr){
 
  let obj=Arr;
   const object=[]  ;
   const modules=obj.map(o=>o.module);
   const module=modules.filter(function(item, pos) {
     return modules.indexOf(item) === pos;
 });
  
   module.forEach(function(value){
     let temp =obj.filter(o=> o.module===value);
     object.push({'module':value,items:temp})
     });
 return object;
   
 }
 // get modules to be displayed in the sidebar 
router.get('/:subject', function(req, res, next) {
  datastore.findSubject(req.params.subject,function(err, sub){
    let subject=orderArray(sub)
    if(err) {return (next(err)) ;}
   // console.log(req.params.subject, sub)
    res.json(subject)
  })

  //res.send('index');
  console.log("up and running");
  
 });
 router.get('/math/:id', function(req, res, next) {
  datastore.findTopic(req.params.id,function(err, sub){
    let subject=orderArray(sub)
    if(err) {return (next(err)) ;}
   // console.log(req.params.subject, sub)
    res.json(subject)
  })

  //res.send('index');
  console.log("up and running");
  
 });
 /*router.get('/math/all', function(req, res, next) {
  datastore.findSubject("math",function(err, sub){
    let subject=orderArray(sub)
    if(err) {return (next(err)) ;}
   // console.log(req.params.subject, sub)
    res.json(subject)
  })

  //res.send('index');
  console.log("up and running");
  
 });*/


 router.get('/physics/:id', function(req, res, next) {
  datastore.findTopic(req.params.id,function(err, sub){
    let subject=orderArray(sub)
    if(err) {return (next(err)) ;}
   // console.log(req.params.subject, sub)  
    res.json(subject)

  });
 });

router.get('/delete/:id', function(req, res, next){
  datastore.del(req.params.id,(err, data)=>{
    err?next(err):console.log(`this error was due to delete midleware`+err)
   res.json({deleted:true})
  })
})

router.post('/create', function(req,res,next){
  console.log(req.body);
  let entry=datastore.Entry;
  const course=new entry({subject:req.body.subject,module:req.body.module,topic:req.body.topic,content:req.body.content});
  console.log(course)
  course.save((err)=>{
    err?console.log(err.message):console.log('Succesfully saved')
  });
  
  console.log('posted, document was sucessfully created')
});

router.post('/update',function(req, res,next){
  console.log(req.body)
  datastore.update(req.body.id, req.body, function(err, data){
    if(err){
      return next(err)
    }
    console.log(`File was updated ${data}`)
  } );
});
module.exports = router;
