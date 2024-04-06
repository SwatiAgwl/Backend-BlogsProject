// instantiating server
const express= require('express');
const app= express();

require('dotenv').config();
const port= process.env.port || 4000; 

// middleware
app.use(express.json());

// importing routes
const routes= require('./routes/blogs')
// mounting routes
app.use('/api/v1',routes)

//starting server
app.listen(port,()=>{
    console.log(`Server started succ at port ${port}`);
})

// connecting with db
const dbConnect= require('./config/database');
dbConnect();

// default route
app.get('/', (req,res)=>{
    res.send("Home Page");
})