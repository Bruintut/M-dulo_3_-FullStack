const route = require('express').Router();
const controllerKnights = require('../controllers/knight.controller')
const {validId} = require('../middlewares/knight.middleware')

route.get('/find-knights', controllerKnights.findAllKnightsController);
route.get('/find-knight/:id', validId, controllerKnights.findByIdKnightController);
route.post('/create', controllerKnights.createKnightController);
route.put('/update/:id', validId, controllerKnights.updateKnightController);
route.delete('/delete/:id', validId, controllerKnights.deleteKnightController);

module.exports = route;
