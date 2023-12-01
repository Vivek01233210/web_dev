import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // res.send("Hello World!")
    res.send("<h1>Hello</h1>")
    // console.log(res)
    // console.log(req.rawHeaders);
});

app.get('/about', (req, res) => {
    res.send("<h1>About Me</h1><p>This is me.</p>")
})

app.get('/contact', (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone: +917258838790</p>")
})

app.post("/register", (req, res) => {
    res.sendStatus(201);
})

app.put("/user/vivek", (req, res) => {
    res.sendStatus(202);
})

app.patch("/user/vivek", (req, res) => {
    res.sendStatus(202);
})

app.delete("/user/vivek", (req, res) => {
    res.sendStatus(202);
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});