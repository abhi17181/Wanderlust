const express=require("express");
const router=express.Router();
//Index -Users
router.get("/",(req,res)=>{
    res.send("Get for users");
});

//show users
router.get("/:id",(req,res)=>{
    res.send("Get for show user");
});

//post user
router.get("/",(req,res)=>{
    res.send("Post for users");
});

//delete route
router.delete("/:id",(req,res)=>{
    res.send("Delete for users id");
});