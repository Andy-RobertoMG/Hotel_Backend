import express from 'express';
import {Router} from 'express';
const router = express.Router();
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
export default function(){
    router.get("/",(req,res)=>{
        res.sendFile(join(__dirname,'../Public/Views/inicio.html'));
    })
    router.get("/libros",(req,res)=>{
        res.sendFile(join(__dirname,'../Public/Views/libros.html'))
    })
    
    return router;
};
