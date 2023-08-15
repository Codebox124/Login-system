const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const { name } = require('ejs')

const users = []

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res)=>{
    res.render('base.ejs', {title: "Login System"})
})
app.get('/login', (req, res)=>{
    res.render('login.ejs', {title: "Login "})
})
app.get('/register', (req, res)=>{
    res.render('register.ejs', {title: "Register"})
})

app.post('/register', async (req, res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        user.push({
            id:Date.now().toString,
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    }
    catch{
        res.redirect('/register')
    }
    console.log(users)
})

app.listen(port, ()=>{
    console.log("server started.......!")
})
