const userRoutes = require('./user.routes');
const typesRoutes = require('./types.routes');
const chatRoutes = require('./chat.routes');

const apiRoutes = (app) => {
    app.use(userRoutes);
    app.use(typesRoutes);
    app.use(chatRoutes);
}

module.exports = apiRoutes;