// backend/server.js
const express = require('express');
const dotenv = require('dotenv');

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware pour traiter les données JSON
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
    res.send('Le serveur est en marche');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
