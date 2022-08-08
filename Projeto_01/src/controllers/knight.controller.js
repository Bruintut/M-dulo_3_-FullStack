const knightsService = require('../services/knight.service')

const findAllKnightsController = (req, res) => {
    const knights = knightsService.findAllKnightsService();
    res.send(knights)
};

const findByIdKnightController = (req, res) =>{
    const idParam = Number(req.params.id);
    const chosenKnight = knightsService.findByIdKnightService(idParam);
    res.send(chosenKnight);
};

const createKnightController = (req, res) =>{
  const knight = req.body;
  const newKnight = knightsService.createKnightService(knight);
  res.send(newKnight);

};

const updateKnightController = (req, res) => {
  const idParam = Number(req.params.id);
  const knightEdit = req.body;
  const updatedKnight = knightsService.updateKnightService(idParam, knightEdit);
  res.send(updatedKnight);

};

const deleteKnightController = (req, res) =>{
  const idParam = req.params.id;
  knightsService.deleteKnightService(idParam);
  res.send({ message: 'Cavaleiro deletado com sucesso!' });
};

module.exports = {
    findAllKnightsController,
    findByIdKnightController,
    createKnightController,
    updateKnightController,
    deleteKnightController
};
