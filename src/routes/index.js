const userRoutes = require('./user.routes');
const typesRoutes = require('./types.routes');

const apiRoutes = (app) => {
    app.use(userRoutes);
    app.use(typesRoutes);
}

module.exports = apiRoutes;