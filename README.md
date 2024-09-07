# Projet e-Commerce C2C

Un projet de plateforme e-Commerce C2C (Consumer-to-Consumer) développé avec Node.js pour le backend et Next.js pour le frontend. Cette application permet aux utilisateurs de vendre et d'acheter des produits directement les uns aux autres.

## 🚀 Fonctionnalités

- **Authentification des utilisateurs** : Inscription, connexion, réinitialisation du mot de passe.
- **Gestion des shop** : Ajout, modification, suppression, et consultation les hop.
- **Gestion des produits** : Ajout, modification, suppression, et consultation des produits.
- **Gestion des commandes** : Création et suivi des commandes.
- **Système de messagerie** : Messagerie en temps réel entre les acheteurs et les vendeurs.
- **Avis et évaluations** : Les utilisateurs peuvent laisser des avis et évaluer les produits.
- **Notifications** : Notifications pour les actions importantes (nouvelles commandes, nouveaux messages, etc.).

## 🛠️ Technologies Utilisées

### Backend

- **Node.js** : Environnement d'exécution JavaScript côté serveur.
- **Express** : Framework web minimaliste pour Node.js.
- **MongoDB** : Base de données NoSQL pour stocker les données des utilisateurs, produits, et commandes.
- **Mongoose** : ODM (Object Data Modeling) pour MongoDB et Node.js.
- **jsonwebtoken** : Pour la gestion des tokens JWT (JSON Web Tokens) pour l'authentification.
- **bcryptjs** : Pour le chiffrement des mots de passe.
- **dotenv** : Pour gérer les variables d'environnement.

### Frontend

- **Next.js** : Framework React pour le rendu côté serveur et la création de pages web dynamiques.
- **React** : Bibliothèque JavaScript pour construire des interfaces utilisateurs.
- **Axios** : Pour les requêtes HTTP depuis le frontend vers le backend.

## 📂 Structure du Projet



## ⚙️ Prérequis

- **Node.js** version 16.x ou plus.
- **npm** version 7.x ou plus.
- **MongoDB** pour la base de données.

## 🛠️ Installation

1. **Cloner le dépôt :**

   ```bash 
   dans le bash tu lance cette commande
   git clone https://github.com/tshilincoln/wenze.git
   cd wenze


2. **installation des dependance backend**
    cd server **pour entré dans le dossier server**
    npm install

3. **configuration de la variable d'environnement**
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/tonNomDeBaseDeDonnées
    JWT_SECRET=ton_secret_pour_jwt


4. **POUR DEMARRER LE SERVER BACKEND**
    npm run dev

5. **Installation des dépendances Frontend :**

    cd ../     **pour rentré à la racine du projet** 
    cd client  **pour entré dans le dossier client** 
    npm install

6. **Démarrer le serveur frontend :**

    npm run dev

7. **Accéder à l'application :**

    Backend disponible sur : http://localhost:5000
    Frontend disponible sur : http://localhost:3000

🧪 **Tests**
Pour exécuter les tests unitaires, utilise la commande suivante (à adapter si des tests sont ajoutés) :

    npm run test

📚 **Documentation de l'API**
    Les endpoints de l'API backend sont documentés dans API Documentation.

📈 **Roadmap**
    Implémenter le paiement en ligne.
    Ajouter des filtres de recherche avancés.
    Intégrer les notifications en temps réel via WebSocket.
    Ajouter un tableau de bord d'administration.
🤝 **Contribution**
    Les contributions sont les bienvenues ! Suivez les étapes ci-dessous pour contribuer :

**Fork le projet.**
    Crée une branche (git checkout -b feature/Amélioration).
    Commit tes modifications (git commit -m 'Ajout d'une nouvelle fonctionnalité').
    Push sur ta branche (git push origin feature/Amélioration).
    Ouvre une Pull Request.
📝 **Licence**
    Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus de détails.

### **Develloper par Class Developpent  :**
- **URLs et Informations de Développeur** : Modifie les liens comme le dépôt GitHub, la documentation de l'API, et les informations de contributeur.
- **Variables d'environnement** : Assure-toi que les instructions sur les variables `.env` correspondent à celles nécessaires pour ton projet.
- **Licence** : Ajoute ou modifie la section de licence selon tes besoins.


