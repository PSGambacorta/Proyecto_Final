const mongoose =  require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const DB_USER = process.env.USER;
const DB_PASSWORD = process.env.PASSWORD;
const DB_NAME = process.env.DATABASE;

const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.0tjbehc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

const conectarDb = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("BD conectada correctamente... - 200!!!!");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDb;