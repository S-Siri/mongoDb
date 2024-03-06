//used to connect the database and export the database import it whereever required
const mongoose = require('mongoose');

const db = async ()=>{
    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db connected');
    } catch (error) {
        console.log('Db connection error');
    }
}


module.exports = {db};