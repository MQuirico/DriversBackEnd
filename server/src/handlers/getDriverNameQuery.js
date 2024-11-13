const axios = require('axios');
const {Driver} = require('../db.js');
const {Op} = require('sequelize')

module.exports.getDriverNameQuery = async (req, res) => {
   const {name} = req.query
    console.log(name)

    try {
        const localDriver = await Driver.findAll({ where: {name: {[Op.iLike]: `%${name}`}}});
        const response = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`);
        const driver = response.data;
        const nameToUpper = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        const response2 = await axios.get(`http://localhost:5000/drivers?name.forename=${nameToUpper}`)
        const driver2 = response2.data
        const result = [...localDriver, ...driver, ...driver2]
        const result2 = [...new Set(result)]
        res.status(200).json({
            success: true,
            data: result2
        });

    } catch (error) {
        res.status(500).json({
            error: error.message,
            success: false,
            message: "There's no match with your query"
        });
    }
};