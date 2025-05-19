const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.end('¡Hola desde nevarezdocker!');
}).listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
