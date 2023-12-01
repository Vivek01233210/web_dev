import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let string = '';
// custom middleware
function printDetails(req, res, next) {
    string = `<h1>hello</h1> <p>Your email is: ${req.body.email}</p> <p>Your password is: ${req.body.password}</p>`
    // res.send(`<h1>hello</h1> <p>Your email is: ${req.body.email}</p> <p>Your password is: ${req.body.password}</p>`);
    next();
}

app.use(printDetails);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/submit", (req, res) => {
    console.log(req.body);
    // res.send(`<h1>hello</h1> <p>Your email is: ${req.body.email}</p> <p>Your password is: ${req.body.password}</p>`);
    res.send(string);
})

app.listen(port, () => {
    console.log("App listening on port http://localhost:3000")
})