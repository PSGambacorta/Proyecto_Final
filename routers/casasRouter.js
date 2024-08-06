const express = require('express');
const casasRouter = express.Router();
const casasController = require('../controllers/casasController');

//Middlewares
//casasRouter.use(express.json());

//Rutas
casasRouter.get('/',casasController.readCasas);
casasRouter.get('/:id',casasController.readCasaId);
casasRouter.post('/',casasController.createCasa);
casasRouter.put('/:id',casasController.updateCasa);
casasRouter.delete('/:id',casasController.deleteCasa);

module.exports = casasRouter;