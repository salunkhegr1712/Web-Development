// adding reuired packages
const server=require("express");
const bp =require("body-parser");
// giving functionalities to the app
const app=server();
app.use(bp.urlencoded({extended:true}));

app.listen(3000,function(){
  console.log("listning at localhost:3000/ ")
})
app.get("/",function(req,res){
  res.sendFile(__dirname+"/bmiCal.html");
});

app.post("/",function(req,res){
  console.log(req.body);
  var f=req.body.weight;
  var h=req.body.height**2;
  console.log("Weight is : "+f + " & Height is : "+req.body.height);
  var bmi = f/h >>0;
  console.log(bmi);
  res.send("<h2> Bmi is : "+bmi+"</h2>");

});
