import mongoose from "mongoose";
import password from "./password.js";

async function conectaNaDatabase() {
    mongoose.connect(`mongodb+srv://admin:${password}@cluster0.hbhnsl4.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0`);
        
    return mongoose.connection;
}

export default conectaNaDatabase;
