const express = require('express');
const path = require("path");
const app = express();
const hbs = require("hbs");
const staticPath = path.join(__dirname, "../public");
const templatesPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.set("view engine", "hbs");
app.set("views", templatesPath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));
app.get("/", (req,res)=>{
    res.render('index');
});
app.get("/about", (req,res)=>{
    res.render('about');
});
app.get("/weather", (req,res)=>{
    res.render('weather');
});
app.get("*", (req,res)=>{
    res.render('404');
});
app.listen(8000,()=>{
    console.log("Keshab");
})

