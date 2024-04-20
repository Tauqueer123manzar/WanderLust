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
    image:{
        type:String,
        set:(v) => v===""?"https://images.unsplash.com/photo-1707343843344-011332037abb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v,
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
