const { Sequelize } = require('sequelize');
 
const sequelize = new Sequelize('MyStore', 'postgrres', 'Ganesh',{
     host: 'localhost',
     dialect: 'postgress' 
});

await sequelize.authenticate().then(()=>{ console.log('Database Connected')});

module.exports = sequelize 