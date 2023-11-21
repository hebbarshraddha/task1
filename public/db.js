mongoose.connect('').then((response)=>{console.log('Connected to database');}) .catch((error)=>{console.log(error);});
var db=mongoose.connection;
