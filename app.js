// --------------------------------------- require ----------------------------------------------
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const port=8080;
const path=require("path");
const Listing = require("./models/listiningmodel");
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
// ============================================== Ejs Engine ==================================================
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


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

// Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
});

// new routes
app.get("/listings/new",async(req,res)=>{
    res.render("listings/new.ejs");
    
});

// Show Route
app.get("/listings/:id",async(req,res)=>{
    let {id}= req.params;
    const listing= await Listing.findById(id);
    res.render("listings/show",{listing});
})

app.post("/listings",async(req,res)=>{
   const newListing= new Listing(req.body.listing);
   await newListing.save();
   res.redirect("/listings");
});

app.listen(port,()=>{
    console.log(`server is listing on port at ${port}`);
});