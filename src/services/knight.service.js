const Knight = require('../models/Knight');

const findAllKnightsService = async () => {
  const knights = await Knight.find();

  return knights;
};

const findByIdKnightService = async (id) => {
  const knight = await Knight.findById(id);
  return knight;
};

const createKnightService = async (newKnight) => {
  const newId = await Knight.create(newKnight);
  newKnight.id = newId;
  return newKnight;
};

const updateKnightService = async (id, knightEdited) => {
  const updatedKnight = await Knight.findByIdAndUpdate(id, knightEdited);
  return updatedKnight;
};

const deleteKnightService = async (id) => {
  return Knight.findByIdAndDelete(id);
};

module.exports = {
  findAllKnightsService,
  findByIdKnightService,
  createKnightService,
  updateKnightService,
  deleteKnightService,
};
