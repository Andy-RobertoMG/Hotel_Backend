import express, { json, urlencoded } from 'express';
// import poo from './bd/base_de_datos';
import reload from 'reload';
import rutas from './router/router.js';
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
//app.use("/Public",express.static(join(__dirname+"/Public")))
// console.log(join(__dirname,"Public"))
// console.log(join(__dirname,"/Public"))
app.use(express.static('public'))
// app.use("/Public",express.static('/Public'))
app.use(json());
app.use(urlencoded({extended:true}));
app.use('/',rutas())
app.listen(3500);
reload(app);