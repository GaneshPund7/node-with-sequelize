const express = require('express');
const user = require('./src/user/user.route');
const profile = require('./src/profile/profile.route');
const comment = require('./src/comments/comment.route');
const role = require('./src/role/role.route');
const permission = require('./src/permission/permission.route');
const products = require('./src/products/product.route');
// const User = require('./src/modal/user.modal')
// const Profile = require('./src/modal/profile.modal')
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/user', user)
app.use('/profile', profile)
app.use('/comment', comment)
app.use('/role', role)
app.use('/product', products)
app.use('/permission', permission)



// if(cluster.isMaster){
//     console.log(`Worker is running ${process.pid}`);
   
//     for (let i = 0; i <=cpus; i++){
//         cluster.fork(); 
//     }

//     cluster.on('exit', (worker, signal)=>{
//         console.log(`Worker is ${worker.process.pid} is died`);
//         console.log('Server is restarting please wait..!');  
//         setTimeout(() => {
//             cluster.fork();
//         }, 2000);
//     })
// }
// else{
    // Error Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong..!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT localhost:${PORT}`);
});

// }

// app.listen(PORT, ()=>{console.log(`Server is running on ${PORT}`)});
