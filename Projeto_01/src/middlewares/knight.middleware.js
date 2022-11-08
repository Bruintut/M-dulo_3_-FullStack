const mongoose = require('mongoose');

const validId = () => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'Id inválido' });
    return;
  }
  next();
};

const validObjectBody = () => {};

module.exports ={
    validId,
    validObjectBody,
}
