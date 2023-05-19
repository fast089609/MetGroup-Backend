import express from "express";
import * as dotenv from 'dotenv'
import router from './routes/index.js'
import { sequelize } from "./database/database.js";
import cors from "./helpers/cors.js";

import './models/Usuario.js';
import './models/Tiendas.js';
import './models/Relaciones.js';
import './models/Articulos.js';



dotenv.config()
const app = express();
const port = process.env.PORT || 3000;
app.use(cors)
app.use(express.json())
app.use('/api', router)


try {
  await sequelize.sync({ force: false });
  app.listen(port, () => console.log(`backend listening on port ${port}!`));
} catch (error) {
  console.error('Unable to connect to the database:', error);

}

