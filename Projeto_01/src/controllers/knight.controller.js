const knightsService = require('../services/knight.service')

const findAllKnightsController = (req, res) => {
    const knights = knightsService.findAllKnightsService();
    if(knights.length == 0){
      return res.status(404).send({message: 'Não existe nenhum cavaleiro cadastrado'});
    }
    res.send(knights)
};

const findByIdKnightController = (req, res) =>{
    const idParam = Number(req.params.id);

    if (!idParam){
      return res.status(400).send({message: "Id inválido"});

    }
    const chosenKnight = knightsService.findByIdKnightService(idParam);
    if (!chosenKnight){
      return res.status(404).send({message: "Cavaleiro não encontrado"});

    }


    res.send(chosenKnight);
};

const createKnightController = (req, res) =>{
  const knight = req.body;

  if (!knight || !knight.name || knight.skill || knight.picture){
    return res.status(400).send({message: "Envie todos os campos do cavaleiro!"});
  }
  const newKnight = knightsService.createKnightService(knight);
  res.send(newKnight);

};

const updateKnightController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam){
    return res.status(400).send({message: "Id inválido"});
  }
  const knightEdit = req.body;
  if (!knightEdit || !knightEdit.name || knightEdit.skill || knightEdit.picture){
    return res.status(400).send({message: "Envie todos os campos do cavaleiro!"});
  }


  const updatedKnight = knightsService.updateKnightService(idParam, knightEdit);
  res.send(updatedKnight);

};

const deleteKnightController = (req, res) =>{
  const idParam = Number(req.params.id);
  if (!idParam){
    return res.status(400).send({message: "Id inválido"});

  }


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
