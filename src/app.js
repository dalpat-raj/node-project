const express = require('express')
const app = express();
const fs = require('fs')
const hbs = require('hbs')
const path = require('path')
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public")
const templates_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

// built in middleware 
app.set("view engine", 'hbs')
app.set('views', templates_path)
hbs.registerPartials(partials_path)

app.use(express.static(static_path))

// routing 
app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/login', (req, res)=>{
    res.render('login')
})
app.get('/regstration', (req, res)=>{
    res.render('regstration')
})
app.get('*',(req, res)=>{
    // res.writeHead(404, 'page not found', {"Content-type": "text/html"});
    // console.log('404 error');
    res.send('page not found')
})


app.listen(port, ()=>{
    console.log(`listing to the port ${port}`);
})