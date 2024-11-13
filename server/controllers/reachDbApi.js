const { get } = require('axios');

const reachDbApi = async (idDriver) => {
     try {
      const {data} = await get(`http://localhost:5000/drivers/${idDriver}`)
      return data;
    } catch (error) {
      console.error(error);
      throw new Error ("error", error)
    }
  };

  module.exports = reachDbApi;