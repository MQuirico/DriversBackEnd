const reachDbApi = require('../../controllers/reachDbApi.js');
const {Driver, Team} = require('../db.js')
const getDriverDetail = async (req, res) => {
  const { idDriver } = req.params;

if(isNaN(idDriver)){
  try{
    const dbDriver = await Driver.findByPk(idDriver, { include: Team });
    res.status(200).json(dbDriver)
  }
  catch (error){
  res.status(500).json({ error_dbByID: error.message})
}
}
else{
  try{
    const apiDriver = await reachDbApi(idDriver);
    res.status(200).json(apiDriver)
    }
  catch (error){
  res.status(500).json({ error_dbByID: error.message})}
} }



module.exports = getDriverDetail;
 

