const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt')
const collection = require('./config')



const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.use(express.static("public"))


const port = 3000



app.get('/', (req, res) => {
    res.render("home")
})

app.get('/login', (req, res) => {
    res.render("login")
})

app.get('/signup', (req, res) => {
    res.render("signup")
})

app.post('/signup', async (req, res) =>{
    const data = {
        name: req.body.username,
        email: req.body.userEmail,
        password: req.body.userPassword
    }

    const existuser = await collection.findOne({name: data.name});

    if(existuser){
        res.send("User already exists");
    }
    else{

        const saltround = 10
        const hashPassword = await bcrypt.hash(data.password, saltround)
        data.password = hashPassword

        const userData = await collection.insertMany(data)
        // console.log(userData)

        res.send("User registered succesfully, try logging in from the home page")
    }
})

app.post('/login', async (req, res) =>{
    try {
        const check = await collection.findOne({email: req.body.userEmail})
        if(!check){
            res.send("User cannot found")
        }

        const passwordMatch = await bcrypt.compare(req.body.password, check.password)
        if(passwordMatch){
            res.render('movies', { username: check.name })
        }
        else{
            res.send("Wrong password")
        }
    } catch{
        res.send("Wrong details")
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})