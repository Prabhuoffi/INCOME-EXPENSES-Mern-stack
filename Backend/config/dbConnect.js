const mongoose = require("mongoose");




const dbConnect = async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017');
        console.log('mongodb connected sucessfully');
    }catch (error){
        console.log('error message');
        process.exit(1);

    }
};


dbConnect();