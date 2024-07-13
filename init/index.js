const mongoose = require("mongoose");
const initdata= require("./data");
const Listing= require("../models/listiningmodel");

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

const initDB=async()=>{
  await Listing.deleteMany({});
  await Listing.insertMany(initdata.data);
  console.log("Data was initialized");
}

initDB();