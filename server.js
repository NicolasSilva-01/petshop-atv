

import express from "express";
import dotenv from "dotenv";
import petsRoutes from './src/routes/petsRoutes.js';


const app = express();

const PORT = 3000;
app.use(express.json());


dotenv.config();
const serverPort = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando...");
});

app.use('/pets', petsRoutes);


app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
});