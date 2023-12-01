import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.use(morgan("combined"));

app.get('/', (req,res)=>{
    // console.log(__dirname + "/public/index.html")
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/submit', (req,res)=>{
    console.log(req.body)
})

app.listen(port, ()=>{
    console.log("App listening on port http://localhost:3000")
})