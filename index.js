const express =  require('express')
const app = express();

const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');

app.use(express.json());


//Routes
app.use('/', userRoutes);
app.use('/', busRoutes);


//Server 
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});


