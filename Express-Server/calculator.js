// first downloading required dependencies
const server=require("express");
const bodyParser=require("body-parser")

// adding express to app
const app=server();

// add bodyParserto the app
// body parser will help us to deal with values which we get from from
// and we recive it and should return a post request for it using app.compositing

app.use(bodyParser.urlencoded({extended:true}));
port=3000;

app.listen(port,function(){
  console.log("The server is running on port "+ port)
});
app.get("/",function(request,responce){
  // responce.send("<h1>Hello World</h1>")
  // so now we will send a file as output
  // __dirname is key in js acts like pwd which give current local location of the folder

  // you can send only one file as output and mutliple responces will not work
  // console.log(__dirname);
  // responce.send(__dirname);
  responce.sendFile(__dirname+ "/calculator.html");
  // responce.sendFile(__dirname+ "/request.txt");
});

app.post("/",function(request,responce){
  console.log(request.body);
  // so request.body is just a Object() and we can tap the number1 value with dot operator
  var f=request.body.number1*request.body.number2;

  responce.send("<h2>The solution of Your Multiplication is : </h2>" +"<h1>"+f+"</h1>");
  // output of the request body
//   The server is running on port 3000
// { number1: '10', number2: '20', submit: '' }
// { number1: '20', number2: '30', submit: '' }

});
