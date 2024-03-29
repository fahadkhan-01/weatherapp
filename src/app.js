const express = require("express");
const app = express();
const path = require('path')
const port = process.env.PORT || 5000 ;
var partials = require('partials');
const hbs = require('hbs')

// public static path 
const static_path =path.join(__dirname, "../public")
const template_path =path.join(__dirname, "../templates/views")
const partials_path =path.join(__dirname, "../templates/partials")

app.set('view engine','hbs');
app.set('views',template_path)
hbs.registerPartials(partials_path)

app.use(express.static(static_path))

// routing
app.get("/",(req,res)=>{
    res.render('index.hbs')
})

app.get("/about",(req,res)=>{
    res.render("about.hbs")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404error",{
            errormsg:"Oops! Page not found"
    })
})

app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`)
})












