const mongoose= require('mongoose');
require('dotenv').config();

const dbConnect = ()=>{
    mongoose.connect(process.env.db_url,{})
    .then(()=> {console.log("connection with db established successfully")})
    .catch( ()=> {
        console.log("error in estab connection with db");
        process.exit(1);
    })
}

module.exports= dbConnect;