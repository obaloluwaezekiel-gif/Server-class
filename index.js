const express = require('express')
const app = express()

app.use(express.json())
const port = 8000

app.get('/', (request, response)=>{
    response.send("server is up and running")
})
const users= [
    {id : 1, name: 'Oba', citizen: "Nigeria"},
    {id: 2, name: 'Pemi', citizen:"Nigeria"}
]

app.get('/users',(req, res)=>{
    res.status(200).json(users)
})

app.get('/users/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const user = users.find(el => el.id === id)

    if (!user){
        return res.status(404).json({error: 'user not found'})
    }
    res.status(200).json(user)
})

app.post('/new-users', (req, res)=>{
    const { name, email } = req.body

    if (!name || !email){
        return res.status(400).json({
            error: "Name and Email are required"
        })
    }

    const newUser = {
        id: users.length+1,
        name: name,
        email: email,
    }

    users.push(newUser)

    res.status(201).json(newUser)
})

app.listen(port,()=>{
    console.log("server is listening on port" + port)
})