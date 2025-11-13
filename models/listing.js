const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    }, 
    description:String,
    image: {
        filename: { type: String, default: "listingimage" },
        url: {
            type: String, 
            default: "https://unsplash.com/photos/sunlight-streams-through-trees-onto-a-coastal-cliffside-Xh4VxC5br-s"
        }
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
});
const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;