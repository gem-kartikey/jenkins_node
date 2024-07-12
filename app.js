const express = require('express')
const app = express();


app.get('/',(req,res)=>{
    res.send("this is response..")
})

app.listen(5050,(err)=>{
    (err)?console.log(err.message):console.log(`server is online at http://localhost:5000`)
})