// --------------------------------------- require ----------------------------------------------
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const listing= require("./models/listiningmodel");
const port=8080;

// ----------------------------------- mongodb connection ---------------------------------------------
main()
.then(()=>{
    console.log("!.... Mongodb database connected .....!");
})
.catch((err)=>{
   console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");
};

// app.get("/testListing",async(req,res)=>{
//     let simpledata= new listing({
//         title:"MERN Project",
//         description:"Easy to learn",
//         price:560,
//         location:"Hyderabad",
//         country:"India"
//     });
//     await simpledata.save();
//     console.log("data saved on the database");
//     res.send("send data sucessfully");
// });
// -------------------------------------------- API call ----------------------------------------------

app.listen(port,()=>{
    console.log(`server is listing on port at ${port}`);
});