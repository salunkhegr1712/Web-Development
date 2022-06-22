// it is server port based system
// here we add the express js to the our system

const exp=require('express');

// then we are creating a app with exp function
const app=exp();
//adding port number to the system
const port=3000

// req is request and res is the resonce for it
// app.get('/',
// (req, res) => {
//   res.send('Hello World!')
// })

// now listem for the requesst from the browser
app.listen(port,grs);

function grs(){
  console.log('server is starting');
}
