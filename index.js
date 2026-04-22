const express = require('express')
const app = express()
app.get('/', (request, response)=>{
    response.send("server is up and running")
})
app.listen(port,()=>{
    console.log("server is listening on port" + port)
})