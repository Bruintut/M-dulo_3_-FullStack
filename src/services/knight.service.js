const Knight = require('../models/Knight');

const findAllKnightsService = async () => {
  const knights = await Knight.find();

  return knights;
};

const findByIdKnightService = async (idParam) => {
  const knight = await Knight.findById(idParam);
  return knight;
};

const createKnightService = async (newKnight) => {
  const createKnight = await Knight.create(newKnight);
  return createKnight;
};

const updateKnightService = async (idParam, knightEdited) => {
  const updatedKnight = await Knight.findByIdAndUpdate(idParam, knightEdited);
  return updatedKnight;
};

const deleteKnightService = async (idParam) => {
  return await Knight.findByIdAndDelete(idParam);
};

module.exports = {
  findAllKnightsService,
  findByIdKnightService,
  createKnightService,
  updateKnightService,
  deleteKnightService,
};
