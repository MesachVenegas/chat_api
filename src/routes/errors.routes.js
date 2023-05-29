const errorHandler = require('../middlewares/errorHandler.middleware');
const errorLogger = require('../middlewares/errorLogger.middleware');
const ormErrorHandler = require('../middlewares/ormErrorHandler');


const errorRoutes = (app) => {
    app.use(errorLogger);
    app.use(errorHandler);
    app.use(ormErrorHandler);

    app.use('*', (req, res) => {
        res.status(404).json({
            message: "Ups something went wrong... can't find them"
        })
    })
}

module.exports = errorRoutes;