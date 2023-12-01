import express from 'express';

const app = express();
const port = 3000;

// Custom middleware function
const logger = (req, res, next) => {
    console.log("Request method:", req.method)
    console.log("Request url:", req.url)
    next();
};

app.use(logger);

app.get('/', (req, res) => {
    res.send("Hello here!")
})

app.listen(port, () => {
    console.log("App listening on port http://localhost:3000")
})