import React from "react";
import "./styles/index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

/*
Pour afficher les données mockées à partir d'une fausse API : 
- mock = true
- Installer JSON SERVER dans le dossier front end (cd sportsee-front -> npm install -g json-server)
- Lancer, toujours dans le dossier front, le chemin suivant : json-server --watch ./src/mock/mocked_data.json --port 1234
*/

/*
Pour afficher les données à partir de l'API : 
- mock = false
- Lancer le back en ouvrant le dossier (cd sportsee-back) puis "yarn-dev" (port 3000)
*/
const mock = true;
root.render(
  <React.StrictMode>
    <App mock={mock} />
  </React.StrictMode>
);

//ATTENTION : Bien lancer LE BACK END EN PREMIER
//Sinon, passer le port du backend en 3001
