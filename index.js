require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/knight.route');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/knights', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
