import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

export default app;
