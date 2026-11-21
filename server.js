const express = require('express');
const path = require('path');
const app = express();

// Render impose son propre port via la variable d'environnement PORT
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Page principale (ta vitrine de démo)
app.get('/', (req, res) => {
  res.render('index');
});
// Route pour ta page de test
app.get('/test', (req, res) => {
  res.render('test');
});


app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
