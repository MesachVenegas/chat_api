const userRoutes = require('./user.routes');
const typesRoutes = require('./types.routes');
const chatRoutes = require('./chat.routes');
const messagesRoutes = require('./message.routes');

const apiRoutes = (app) => {
    app.use(userRoutes);
    app.use(typesRoutes);
    app.use(chatRoutes);
    app.use(messagesRoutes);
}

module.exports = apiRoutes;