const express = require('express');
const moongoose = require('moongoose');

require('dotenv').config()
const app = express();
const PORT = 3000;

const MONGO_URI=`mongodb+srv://${process.env.dbUser}:${process.env.dbPw}@cluster0.mbklg.mongodb.net/${process.env.dbName}`;
const connectBD = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log('Connect success');
    } catch (error){
        console.log(error,message)
        process.exit(1);
    }
}

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./interface");

app.get("/", (req, res) => {
    res.render("test");
})

app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${port}`)
});