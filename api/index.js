const { sequelize } = require('./db')
const server = require('./server')

sequelize.sync({force: true}).then(() => {
    server.listen(3001, () => {
        console.log('%s listening at 3001');
    });
});