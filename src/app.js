const userRoutes = require('./routes/user.routes');
const initModels = require('./models/initModels');
const fileUpload = require('express-fileupload');
const db = require('./utils/connection');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(fileUpload());
app.use(userRoutes);

initModels();

db.authenticate()
    .then(() => console.log('Connection established'))
    .catch(error => console.error(error));

db.sync()
    .then(() => console.log("Database synced successfully"))
    .catch(error => console.error(error));

app.listen(PORT, () => {
    console.log(`Servidor en linea y escuchando en el puerto ${PORT}`)
});
