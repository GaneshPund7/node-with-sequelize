const express = require('express');
const user = require('./src/user/user.route');
const profile = require('./src/profile/profile.route');
// const User = require('./src/modal/user.modal')
// const Profile = require('./src/modal/profile.modal')
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/user', user)
app.use('/profile', profile)


// User.belongsTo(Profile, { foreignKey: 'userId', as: 'profiles' })
// Profile.hasOne(User, { foreignKey: 'userId', as: 'users' })

// User.hasOne(Profile, { foreignKey: 'userId', as: 'profiles' });
// Profile.belongsTo(User, { foreignKey: 'userId', as: 'users' });

// User.sync({alter: true});
// Profile.sync({alter: true});

app.listen(PORT, ()=>{console.log(`Server is running on ${PORT}`)});
