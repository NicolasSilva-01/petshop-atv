
// Importar pacotes/bibliotecas
import express from "express";
import dotenv from "dotenv";
import petsRoutes from './src/routes/petsRoutes.js';

// Criar aplicação com Express e configurar para aceitar JSON
const app = express();

const PORT = 3000;
app.use(express.json());

// Carregar variáveis de ambiente e definir constante para porta do servidor
dotenv.config();
const serverPort = process.env.PORT || 3000;

// Rota principal GET para "/"
app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando...");
});

app.use('/pets', petsRoutes);


app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
});