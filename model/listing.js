const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const listingschema= new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
       type:String,
       required:true
    },
    image: {
        type: String, // Ensure that 'image' field is defined as string type
        default: "https://images.unsplash.com/photo-1712952815172-9ab1b6bba7b5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: function (v) {
            return v ? v.url : this.default; // Set image to default if v is falsy, otherwise use v.url
        }
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
});

const Listing = mongoose.model("Listing",listingschema);

module.exports=Listing;
