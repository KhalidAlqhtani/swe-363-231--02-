const express = require("express");
const path = require("path");
const router = express.Router();
const cDir = process.cwd();
const mainDir =  process.cwd();
router.get('/home', (request,response) =>{
       const pagePath = path.join(mainDir,"HTML/index.html")
       response.status(200).sendFile(pagePath)
   })

router.get('/home-ar', (request,response) =>{
       const pagePath = path.join(mainDir,"HTML/index-ar.html")
       response.status(200).sendFile(pagePath)
   })
router.get('/appointement', (request,response) =>{
       const pagePath = path.join(mainDir,"HTML/appointement.html")
       response.status(200).sendFile(pagePath)
   })
router.get('/appointement-ar', (request,response) =>{
       const pagePath = path.join(mainDir,"HTML/appointement-ar.html")
       response.status(200).sendFile(pagePath)
   })

router.get('/hire_me', (request,response) =>{
       const pagePath = path.join(mainDir,"./HTML/hire_me.html")
       response.status(200).sendFile(pagePath)
   })

router.get('/hire_me-ar', (request,response) =>{
       const pagePath = path.join(mainDir,"./HTML/hire_me-ar.html")
       response.status(200).sendFile(pagePath)
   })

router.get('/contact', (request,response) =>{
       const pagePath = path.join(mainDir,"./HTML/contact.html")
       response.status(200).sendFile(pagePath)
   })
router.get('/contact-ar', (request,response) =>{
       const pagePath = path.join(mainDir,"./HTML/contact-ar.html")
       response.status(200).sendFile(pagePath)
   })

router.all('*', (request,response) =>{
       response.status(404).send("<h1>404 Eror page not found</h1>")
})

module.exports = router