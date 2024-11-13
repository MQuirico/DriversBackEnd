const { createDriver } = require('../../controllers/postRouteController.js');

const postDriver = async (req, res) => {

  const { nombre, apellido, descripcion, imagen, nacionalidad, escudería ,fechaNacimiento, teamIds } = req.body;
  console.log(req.body)
  try {
    const newDriver = await createDriver({
      nombre,
      apellido,
      descripcion,
      imagen,
      nacionalidad,
      fechaNacimiento,
      escudería,
      teamIds,
    });

    res.status(201).json({ message: 'Conductor creado exitosamente', driver: newDriver });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = postDriver;