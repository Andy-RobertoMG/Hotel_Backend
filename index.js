const express = require('express');
const { dirname } = require('path');
const path = require("path");
const router = express.Router()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',router.get("/",(req,res)=>{
    console.log("hola");
    res.sendFile(path.resolve(__dirname,'Public/Views/inicio.html'));
}))
app.listen(3500);