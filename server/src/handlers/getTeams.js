const reachDbApi = require('../../controllers/reachDbApi.js');
const {Team} = require('../db.js')

const getTeams = async (req, res) => {
  try {
    const dbTeams = await Team.findAll();
    if (dbTeams.length === 0) {
      const apiTeams = await reachDbApi('/')(req, res);
      await Team.bulkCreate(apiTeams);
    }
    res.json(dbTeams.map(team => team.dataValues));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los teams', message: error.message });
  }
};

module.exports = getTeams;
