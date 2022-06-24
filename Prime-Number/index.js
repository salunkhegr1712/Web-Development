const app = require("express");
const bp = require("body-parser");

const server = app();

server.use(bp.urlencoded({
  extended: true
}));

server.listen(8000, function() {
  console.log("server is listening on port 8000");
})

server.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");

});
server.get(__dirname, function(req, res) {
  res.sendFile(__dirname + "/master.css");

})

server.post("/", function(req, res) {

  var n=Number(req.body.n1);
  var ff=isPrime(n);
  if(ff===1){
    res.send("<h1> "+"the number "+n+ " is Prime"+"</h1>");
  }
  else if (ff===0) {
    res.send("<h1> "+"the number "+n+ " is Not Prime Not Composite"+"</h1>");
  }
  else {
    res.send("<h1> "+"the number "+n+ " is Not a Prime"+"</h1>");
  }
})

function isPrime(a) {
  if (a === 0) {
    return 0;
  }

  else if (a === 1 || a === 2) {
    return 1;

  }

  else {
    var f = 2;
    while (f < a / 2) {
      if (a % f === 0) {
        return -1;
      }
      else {
        f = f + 1;
      }
    }
    return 1;

  }
}
