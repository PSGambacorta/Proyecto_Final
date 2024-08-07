const express = require('express');
const casasRouter = require('./routers/casasRouter');
const port = process.env.port || 3000;
const app = express();
const cors = require('cors');

//Middlewares
app.use(cors());
//app.use(express.json());

//Routers
app.use('/api/casas',casasRouter);

app.get('/', (req, res) => {
  res.send('Bienvenidos al Servidor CRUD de Pablo Gambacorta - 200!!')
})

//Inicio de la escucha del Servidor
app.listen(port, () => {
  console.log(`Servidor FINAL escuchando en el port ${port}`)
})