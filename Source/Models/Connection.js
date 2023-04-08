var mongoose=require('mongoose');

mongoose.set('strictQuery',true);

mongoose.connect('mongodb://localhost:27017/User', {family:4})
        .then(()=>{console.log('DB Connection Successfull');})
        .catch(()=>{console.log('DB Connection Failed');})