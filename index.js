const express = require('express');
const path = require('path');
const app = express();

// Configurar Express para servir archivos estáticos desde la carpeta "public/imagenes"
app.use('/imagenes', express.static(path.join(__dirname, 'public', 'imagenes')));

// Redirigir rutas a archivos PHP
app.get('/', (req, res) => {
  res.redirect('http://localhost:8080/inicio.php');  // Redirige a la página PHP en tu servidor Apache
});

app.get('/GAMA_FAMILIAR/GAMA_FAMI.php', (req, res) => {
  res.redirect('http://localhost:8080/GAMA_FAMI.php');
});

app.get('/GAMA_MEDIA/GAMA_MEDIAA.php', (req, res) => {
  res.redirect('http://localhost:8080/GAMA_MEDIAA.php');
});

// Middleware para manejar errores 404 (Página no encontrada)
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

// Establecer el puerto en el que el servidor Express escuchará
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Express corriendo en puerto ${port}`);
});
