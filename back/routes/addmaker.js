var express = require("express");
var router = express.Router();
const {addmaker} = require("../controllers/addmaker");

router.post("/addmaker",addmaker);



module.exports=router;
