const express = require('express');
const app = express();

app.use(express.json())

const profile = [
    {name: "Oba", age:5, indigine: "Osun"},
    {name: "Pemi", age:5, indigene: "Osun"}
]
app.get('/', function(req, res){
    res.send('Hello, World! Welcome to Express.js!')
});

app.get("/profilepage", function(request, response){
    response.json(profile[0])
})

app.get("/about", (req, res)=>{
    res.send("This is about page")
})

app.get('/contact', (request, response)=>{
    response.send("This is contact page")
})
app.listen(3000, function(){
    console.log('Server is up and running')
});