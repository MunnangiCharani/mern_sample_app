let express=require("express");
let router=express.Router();
let bcrypt=require("bcrypt");
let {users}=require("../models/users");

router.post("/register", async (req, res) => {
  //res.send("Register page called");
  let data=req.body;
  data.password=await bcrypt.hash(data.password,10);

  let newuser=new users(data);
  let result=await newuser.save();
  res.send(result);
});

router.post("/login", async (req, res) => {
  //res.send("Login page called");
  let user=await users.findOne({email:req.body.email});
  if(user){
    let passmatch=await bcrypt.compare(req.body.password,user.password);
    if(passmatch){
        res.send("Login Successful");
    }else{
        res.send("Password Invalid");
    }
  }else{
    res.send("Email Invalid");
  }
  res.send(user);
});

router.get("/viewtasks", (req, res) => {
  res.send("View Tasks page called");
});

router.get("/viewtodo", (req, res) => {
    res.send("View ToDo page called");  
});

router.put("/updateprofile", (req, res) => {
    res.send("Update Profile page called");
});

module.exports = router;
