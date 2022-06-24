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
app.listen(port,grs); //port is a port number where our server is listening for
//request and grs is function which get called after listening is started and take place
// in the serverside


function grs(){
  console.log('server is starting');
}

// now start with how to responce to received query
// localhost:port-number/ is the root
// so if you visit that website following get request will be processed

app.get("/first",function(request,responce){

    console.log(request);
    // request is an object file for standard request which all browser do for
    // receiving the resources from the server
    // now lets send the responce to the browserfor that we just have to learn about the
    // send function

    // you can send the html the responcelike below
    // but u have to be carefull in case of the "" and ''

    responce.send("<html lang='en' dir='ltr'><head> <meta charset='utf-8'> <title>Challenge</title> </head> <body> <h1>HTML Challenge</h1> <hr size='3' noshade=''> <h2> </h2> <table> <tbody><tr> <td>one</td> <td>two</td> </tr> <tr> <td>three</td> <td>four</td> </tr> </tbody></table> </body></html>");
});

app.get("/",function(request,responce){

    console.log(request);
    // request is an object file for standard request which all browser do for
    // receiving the resources from the server
    // now lets send the responce to the browserfor that we just have to learn about the
    // send function
    responce.send("hello <h1>Ghansham Salunkhe</h1>");
});

// it will redirect if user tag in the localhost:3000/about

app.get("/about",function(request,responce){
    responce.send('<!DOCTYPE html><html lang="en" dir="ltr"> <head> <meta charset="utf-8"> <title>Contact Details</title> <link rel="stylesheet" href="css/stylesheet.css"> </head> <body class="top"> <h2>Contact details</h2> <!-- here i will display my social media handles with the use of the anchor tag (a) and here we will provide link for a perticular text such that it can redirect with help of link --> <ul> <!-- for anchor tag we can also give another html file from which it get redirected to the new html page --> <!-- we will provide the target inside the anchor tag which is used for the opening the link in the new tab --> <!-- &nbsp is used for giving spaces whenever needed --> <h4>Social Media : </h4> <a href="https://www.linkedin.com/in/ghanasham-salunkhe-70b607204/" target="_blank">linkedin</a> &nbsp <a href="https://www.facebook.com/ghansham.salunkhe.180/" target="_blank">Facebook</a> &nbsp <a href="https://github.com/salunkhegr1712" target="_blank">Github</a> <h4>Email : </h4> salukhegr1712@gmail.com <br> <h4>Contact : </h4> +91 8624969401 <br> </ul> <!-- form is the forms which are quiet usefull when we are dealing with the internet form has 2 tags inside it and they are input and label are self closing tags so u dont need to close it manually label - name of inout which you wanted you have to specify here input - the input is deal with the which kind of the input you want in your website while studying the inputs you have study all types like radio text url password month range week file image .and many more --><hr><br><!-- action inside it that it will send the info captured in form to mail givem after mailto@ --><!-- enctype is the encryption type which your using herename inside input will give you information about the which input youre taking --><!-- <form action="mailto:salunkhegr1712@gmail.com" method="post" enctype="text/plain"> <div class=""> <label> Your Name :</label> &nbsp &nbsp &nbsp &nbsp <input type="text"> </div><br> <div class=""> <label> Your Email :</label> &nbsp &nbsp &nbsp &nbsp <input type="email" name="email"> </div><br> <div class=""> <label>Your Contact No :</label> <input type="number" name="Contact numbers" id=""> </div><br> <div class=""> <label>Comment : </label> <!-- as the input is single line field so in order to deal with multiline we use textarea and we can adjust it acording to our need --> <!-- &nbsp is used for giving spaces whenever needed --><!-- &nbsp &nbsp &nbsp &nbsp <textarea name="name" rows="5" cols="25"></textarea> </div> <br> <input type="submit"><br> --></form> <h1>sajgfvjhdshjfhds</h1></body></html>');
});
