const knightsService = require('../services/knight.service');
const mongoose = require('mongoose');

const findAllKnightsController = async (req, res) => {
  const knights = await knightsService.findAllKnightsService();
  if (knights.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum cavaleiro cadastrado' });
  }
  res.send(knights);
};

const findByIdKnightController = async (req, res) => {
  const idParam = req.params.id;

  const chosenKnight = await knightsService.findByIdKnightService(idParam);

  if (!chosenKnight) {
    return res.status(404).send({ message: 'Cavaleiro não encontrado' });
  }
  res.send(chosenKnight);
};

const createKnightController = async (req, res) => {
  const knight = req.body;

  if (!knight || !knight.name || !knight.skill || !knight.picture) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos do cavaleiro!' });
  }
  const newKnight = await knightsService.createKnightService(knight);
  res.send(newKnight);
};

const updateKnightController = async (req, res) => {
  const idParam = req.params.id;
  const knightEdit = req.body;
  

  const chosenKnight = await knightsService.findByIdKnightService(idParam);

  if (!chosenKnight) {
    return res.status(404).send({ message: 'Cavaleiro não encontrado!' });
  }

  if (
    !knightEdit ||
    !knightEdit.name ||
    !knightEdit.skill ||
    !knightEdit.picture
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos do cavaleiro!' });
  }

  const updatedKnight = await knightsService.updateKnightService(
    idParam,
    knightEdit,
  );
  res.send(updatedKnight);
};

const deleteKnightController = async (req, res) => {
  const idParam = Number(req.params.id);

  const chosenKnight = await knightsService.findByIdKnightService(idParam);

  if (!chosenKnight) {
    res.send({ message: 'Cavaleiro não encontrado!' });
  }

  await knightsService.deleteKnightService(idParam);

  res.send({ message: 'Cavaleiro deletado com sucesso!' });
};

module.exports = {
  findAllKnightsController,
  findByIdKnightController,
  createKnightController,
  updateKnightController,
  deleteKnightController,
};
