const errorRoutes = require('./routes/errors.routes');
const initModels = require('./models/initModels');
const fileUpload = require('express-fileupload');
const db = require('./utils/connection');
const apiRoutes = require('./routes');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(fileUpload({
    createParentPath: true,
    limits: { fileSize: 10 * 1024 * 1024 }, // Limita el tamaño del archivo a subir a 10mb
    abortOnLimit: true,  // Indica si se supera el tamaño del archivo permitido aborte la subida del archivo.
    responseOnLimit: 'the file exceeds the size limit'
}));


apiRoutes(app);
errorRoutes(app);

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
