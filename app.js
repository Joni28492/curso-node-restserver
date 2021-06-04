const Server = require("./models/server");

require("dotenv").config();

const server = new Server(); //creamos la instancia
server.listen(); //y activamos la escucha
