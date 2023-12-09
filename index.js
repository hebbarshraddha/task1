var express=require("express")
var bodyParser=require("body-parser")

var mongoose=require("mongoose")

var app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))



mongoose.connect('mongodb+srv://*******:*********@cluster0.tzy67ux.mongodb.net/?retryWrites=true&w=majority',).then((response)=>{console.log('Connected to database');}) .catch((error)=>{console.log(error);});



var db=mongoose.connection;

db.on("error",()=>console.log("error in database"));
db.once('open',()=>console.log("connected to database"));
app.post('/register',(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var phnum=req.body.phnum;
    var password=req.body.password;

    var data={
        "name":name,
        "email":email,
        "phnum":phnum,
        "password":password,
        
    }
    db.collection('users').insertOne(data,(err,collection)=>{
       if(err){
        throw err;
       }
       console.log("Record Inserted Successfully");
            
        });
        return res.redirect("signup_sucess.html")
    })




app.get("/",(req,res)=>{
   // res.send("hello from server")
   res.set({"Allow-access-Allow-Origin":'*'})
   return res.redirect("index.html");
}).listen(3000);

console.log("Listening on port 3000")
