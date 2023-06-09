var express = require("express");
var router = express.Router();
const {signout} =require("../controllers/auth");
const {signup} = require("../controllers/auth");
const {signin} =require("../controllers/auth");
const {check} = require("express-validator");

router.post("/signup",
[
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({ min: 3 })
  ],signup);
router.get("/signout",signout);
router.post("/signin",
[
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 })
  ],signin);




module.exports=router;