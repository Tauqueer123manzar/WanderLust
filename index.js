const express = require("express");
const app=express();
const Listeing= require('./model/listing.js');
const port=8080;

const mongoose = require('mongoose');

main().then((res)=>{
    console.log("!.......... Mongodb connection successfully...........!");
})
.catch((err)=>{
    console.log(err);
})
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Wanderlust');
}

app.get("/testListing",async(req,res)=>{
    try{
        let simpletest= new Listeing({
            title:"My new villa",
            description:"This is my new villa please come in my villa",
            price:45000,
            location:"Delhi North side",
            country:"India"
        });
        await simpletest.save();
        console.log("sample was saved");
        res.send("Testing is success");
    }catch(error){
        console.log("Error saving listing");
        res.status(500).send("Error occurred while saving listing.");
    }
});
app.listen(8080,()=>{
    console.log("server is listening on the 8080");
});
