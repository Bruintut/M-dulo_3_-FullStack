const route = require('express').Router();
const controllerKnights = require('../controllers/knight.controller')

route.get('/find-knights', controllerKnights.findAllKnightsController);
route.get('/find-knight/:id', controllerKnights.findByIdKnightController);
route.post('/create', controllerKnights.createKnightController);
route.put('/update/:id', controllerKnights.updateKnightController);
route.delete('/delete/:id', controllerKnights.deleteKnightController);

module.exports = route;
