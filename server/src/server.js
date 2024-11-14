const express = require ("express");
const router = require ("./routes/mainRouter.js");
const morgan = require ("morgan");
const cors = require ("cors");
const server = express();

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001', "https://drivers-pi.vercel.app", 'http://localhost:5000', 'http://localhost:5173'];

server.use(morgan("dev"));
server.use(express.json());
server.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

server.use(router);


server.listen(port = 3000, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

module.exports = server;
