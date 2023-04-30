var express = require("express");
var router = express.Router();
const {postajob} = require("../controllers/postajob");
const {check} = require("express-validator");

router.post("/postajob",
[
    check("createdby", "name should be at least 3 char").isLength({ min: 3 }),
    check("phone number", "Invalid phonenumber").isLength({ min: 10 }),
     check("email", "email is required").isEmail(),
     check("address", "address is required").isLength({ min: 10 }),
    check("description", "description should be at least 12 char").isLength({ min: 12 })
  ],postajob)



module.exports=router;
