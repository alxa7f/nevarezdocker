<<<<<<< HEAD
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
=======
const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.end('¡Hola desde nevarezdocker!');
}).listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
>>>>>>> 51c40cda7cf118adf3004808e73226de510164d9
});

export default app;
