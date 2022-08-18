const express = require('express');
const bodyparser = require('body-parser');
const https = require('https');
app=express()

app.use("/",express.static(__dirname+"/public/"))

app.listen(3000,function(){
  console.log("we are listening on localhost:3000/");
})

function Obj(name,city,age){
  this.name=name,
  this.city=city,
  this.age=age;
}

const cj = new Obj("cj","unknown",15);

console.log(cj);
const setRoot={root: __dirname+"/public"};
app.get("/",function(req,res){
  // res.send("<h1>Hello World</h1>")
  // specifying root
    // res.sendFile("new.html",setRoot);
    let m;
    let url="https://api.openweathermap.org/data/2.5/weather?q="+"pune"+"&units=metric&appid=943b40f15433ddc035e9b4c69e88a1fa"
    https.get(url,function(res){
      // console.log(res.body);
      // console.log(res.statusCode);
      // console.log(res);
      res.on("data",function(data){
        const json=JSON.parse(data)
        console.log(json);
      });
    });
    res.write("<h1>Name : "+cj.name+"</h2>");
    res.write("<h2> Lives in : "+cj.city+"</h2>");
    res.write("<h2> Age is :"+cj.age+"</h2>")
    res.send();
});
