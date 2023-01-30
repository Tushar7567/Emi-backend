import { Db } from "mongodb";
import mongoose from "mongoose";

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://admin:TusharMongoAtlas@cluster0.xy9afts.mongodb.net/emiCalculator?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to db');
})
.catch((error)=>{
    console.log(error.message);
});

// Db.emicalculator.dropIndex();