const knightsOfTheZodiacSaintSeiya = [
    {
      id: 1,
      name: 'Seiya',
      skill:'Meteoro de Pegasos',
      picture: 'assets/images/seiya.png',
      
    },
    {
      id: 2,
      name: 'Ikki',
      skill:'Ave Fênix.',
      picture: 'assets/images/ikki.png',
      
    },
    {
      id: 3,
      name: 'Hyoga',
      skill:'Pó de Diamante.',
      picture: 'assets/images/hyoga.png',
      
    },
  ];



  const findAllKnightsService = () =>{
    return knightsOfTheZodiacSaintSeiya;
  };

  const findByIdKnightService = (idParam) => {
    return knightsOfTheZodiacSaintSeiya.find((knight) => knight.id === idParam);
     
  };


  const createKnightService = (newKnight) =>{
    const newId = knightsOfTheZodiacSaintSeiya.length + 1;
    newKnight.id = newId;
    knightsOfTheZodiacSaintSeiya.push(newKnight);
    return newKnight;
  };

  const updateKnightService = (id, knightEdited) => {
    knightEdited['id'] = id;
    const knightIndex = knightsOfTheZodiacSaintSeiya.findIndex((knight) => knight.id == id);
    knightsOfTheZodiacSaintSeiya[knightIndex] = knightEdited;
    return knightEdited;
  };

  const deleteKnightService = (id) => {
    const knightIndex = knightsOfTheZodiacSaintSeiya.findIndex((knight) => knight.id == id);
    return knightsOfTheZodiacSaintSeiya.splice(knightIndex, 1);
  }







  module.exports = {
    findAllKnightsService,
    findByIdKnightService,
    createKnightService,
    updateKnightService,
    deleteKnightService

  };
