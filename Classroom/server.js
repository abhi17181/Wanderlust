const express=require("express");
const app=express();
const session=require(("express-session"));
const flash=require("connect-flash");

const sessionOptions={
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true,
};
app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");
    next();
});
app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
    req.session.name=name;
    if(name==="anonymous"){
        req.flash("error","User not registred");
    }else{
        req.flash("success","User registerd successfully");
    }
    res.redirect("/hello");
});
app.get("/hello",(req,res)=>{
    res.render("page.ejs",{name:req.session.name});
});
// app.use(cookieParser());
 
// app.get("/getsignedcookies",(req,res)=>{
//     res.cookie("made-in","India",{signed:true});
//     res.send("Signed cookies sent");
// });
// app.get("/verify",(req,res)=>{
//     console.log(req.cookies);
//     res.send("verified");
// });
// app.get("getcookies",(req,res)=>{
//     res.cookie("greet","Hello");
//     res.cookie("madeIn","India");
//     res.send("Sent you some cookies");
// });

// app.get("/greet",(req,res)=>{
//     let { name="anonymous"}=req.cookies;
//     res.send(`Hi, ${name}`)
// })
// app.get("/",(req,res)=>{
//     console.dir(req.cookies);
//     res.send("Hi, I am root!");
// });
// app.use("/users",user);
// app.use("/posts",user);

app.listen(3000,()=>{
    console.log("Server is listening to 3000");
});