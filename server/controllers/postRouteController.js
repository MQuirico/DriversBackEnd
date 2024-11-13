const { Driver, Team } = require('../src/db.js');

async function createDriver({ nombre, apellido, descripcion, imagen, nacionalidad, escudería ,fechaNacimiento, teamIds }) {
  try {
    const newDriver = await Driver.create({
      name: {
        forename:nombre,
        surname: apellido
      },
      description: descripcion,
      image: imagen,
      nationality: nacionalidad,
      birthDate: fechaNacimiento,
      teams: escudería
    });

    if (teamIds && teamIds.length > 0) {
      const teams = await Team.findAll({
        where: {
          id: teamIds,
        },
      });

      try {
        await newDriver.addTeams(teams);
      } catch (error) {
        console.error(error);
        throw new Error('Error al asociar el conductor con los equipos');
      }
    }

    return newDriver;
  } catch (error) {
    console.error(error);
    throw new Error('Error al crear el conductor');
  }
}

module.exports = {
  createDriver,
};