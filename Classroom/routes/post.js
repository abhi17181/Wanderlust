const express=require("express");
const router=express.Router();

//Post
//Index 
router.get("/",(req,res)=>{
    res.send("Get for post");
});

//show users
router.get("/:id",(req,res)=>{
    res.send("Get for show post");
});

//post user
router.get("/",(req,res)=>{
    res.send("Post for post");
});

//delete route
router.delete("/:id",(req,res)=>{
    res.send("Delete for post id");
});
module.exports=router;