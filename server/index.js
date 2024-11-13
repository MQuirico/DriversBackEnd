const server = require("./src/server.js");
const { conn } = require('./src/db.js');
const PORT = 3001; //puerto comunicación con front end y base de datos //puerto de escucha activa donde vamos a levantar nuestro servidor

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Servidor escucha frontend y dbb en el puerto ${PORT}`);
})
}).catch(error => console.error(error))
