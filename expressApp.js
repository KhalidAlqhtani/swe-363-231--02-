const express = require("express");
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname,"")))

app.get('/home', (request,response) =>{
    const pagePath = path.join(__dirname,"HTML/index.html")
    response.status(200).sendFile(pagePath)
})
app.get('/home-ar', (request,response) =>{
       const pagePath = path.join(__dirname,"HTML/index-ar.html")
       response.status(200).sendFile(pagePath)
   })
app.get('/appointement', (request,response) =>{
       const pagePath = path.join(__dirname,"HTML/appointement.html")
       response.status(200).sendFile(pagePath)
   })
app.get('/appointement-ar', (request,response) =>{
       const pagePath = path.join(__dirname,"HTML/appointement-ar.html")
       response.status(200).sendFile(pagePath)
   })

   app.get('/hire_me', (request,response) =>{
       const pagePath = path.join(__dirname,"./HTML/hire_me.html")
       response.status(200).sendFile(pagePath)
   })

   app.get('/hire_me-ar', (request,response) =>{
       const pagePath = path.join(__dirname,"./HTML/hire_me-ar.html")
       response.status(200).sendFile(pagePath)
   })

   app.get('/contact', (request,response) =>{
       const pagePath = path.join(__dirname,"./HTML/contact.html")
       response.status(200).sendFile(pagePath)
   })
   app.get('/contact-ar', (request,response) =>{
       const pagePath = path.join(__dirname,"./HTML/contact-ar.html")
       response.status(200).sendFile(pagePath)
   })
app.all('*', (request,response) =>{
    response.status(404).send("<h1>404 Eror page not found</h1>")
})




app.listen(3000, () =>{ 
    console.log(
        "Port: 3000"
    )
})