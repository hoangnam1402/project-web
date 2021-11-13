const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./interface");

app.get("/", (req, res) => {
    res.render("test");
})

app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${port}`)
});