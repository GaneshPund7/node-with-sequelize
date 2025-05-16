const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('NimapStore', 'postgres', 'Ganesh',{
 host: 'localhost',
 dialect :'postgres'
})

sequelize.authenticate().then(()=>{
    console.log('Database connected');
});

module.exports = sequelize;
