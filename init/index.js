const mongoose = require("mongoose");
const initdata= require("./data");
const Listing = require("../model/listing.js");

main().then((res)=>{
    console.log("!.......... init data connection successfully...........!");
})
.catch((err)=>{
    console.log(err);
})
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Wanderlust');
}

const initDB=async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log("init Data sucessful connected");
}
initDB();