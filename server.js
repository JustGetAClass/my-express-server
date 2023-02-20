const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/contact", (req, res) => {
    res.send("contact me at: mohamedsalat62@gmail.com");
});

app.get("/about", (req, res) => {
    res.send("I'm a passionate software engineer currently learning express")
});

app.get("/hobbies", (req, res) =>{
    res.send("<h1>I like watching movies and tv shows</h1>")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });