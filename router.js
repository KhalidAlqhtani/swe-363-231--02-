const express = require("express")
const path = require("path")
const app = express()
const nav = require("./routerNav")

app.use(express.static(path.join(__dirname,"")))
app.use("/",(req,res,next)=>{
    next();
})
app.use("/",nav)

app.listen(3000, () =>{ 
    console.log(
        "Port: 3000"
    )
})