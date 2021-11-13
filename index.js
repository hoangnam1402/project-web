const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth.js');

require('dotenv').config()
const app = express();
const PORT = 3000;

const MONGO_URI=`mongodb+srv://${process.env.dbUser}:${process.env.dbPw}@cluster0.mbklg.mongodb.net/${process.env.dbName}`;
const connectBD = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect success');
    } catch (error){
        console.log(error.message)
        process.exit(1);
    }
}

connectBD();

app.use('/api/auth', authRoutes)

app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`)
});