var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./interface");

app.listen(3000);

app.get("/", (req, res) => {
    res.render("test");
})