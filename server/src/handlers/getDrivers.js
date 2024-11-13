const { Driver } = require('../db.js')
const defImage = '../media/default.jpg'
const axios = require('axios')
const getDrivers = async (req, res) => {
  try {
    const dbDrivers = await Driver.findAll();
    const apiDrivers = await axios.get("http://localhost:5000/drivers")
    const combinedDrivers = [
      ...dbDrivers.map(driver => driver.dataValues),
      ...(apiDrivers.data || []),
    ];
    const driversWithImages = combinedDrivers.map(driver => ({
      ...driver,
      image: driver.image || defImage,
    }));
    res.json(driversWithImages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los drivers', message: error.message });
  }
};

module.exports = getDrivers;

